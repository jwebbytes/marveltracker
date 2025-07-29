
interface Movie{
    title: string;
    posterUrl: string;
    description: string;
}


import Image from 'next/image';

function Movie({title,description,posterUrl}: Movie) {

    return(
        <div >
            <h2>{title}</h2>
            <Image src={posterUrl} alt={title} width={300} height={450} />
            <p>{description}</p>
        </div>
    )
}


export default Movie;