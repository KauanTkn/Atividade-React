import { useState } from 'react';
import { sculpturesList } from './data';

export default function SculptureGallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
            setIndex((index) => (index + 1)%sculpturesList.length);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculpturesList[index];
    return(
        <>
            <button name="next" onClick={handleNextClick}>
                Next
            </button>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} Details
            </button>
            <h2>
                <i>{sculpture.name} </i>by {sculpture.artist}
            </h2>
            <h3>
                ({index+1} of {sculpturesList.length})
            </h3>
            <img 
                src={sculpture.url}
                alt={sculpture.alt}
                />
            {showMore && <p>{sculpture.description}</p>}
        </>
    )
}