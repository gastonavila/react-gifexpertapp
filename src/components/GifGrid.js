import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';
//import {getGif} from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ( {category} ) => {

    // const [images, setimages] = useState([]);
    
    const { data: images, loading } = useFetchGifs( category );
    console.log(loading);
    // useEffect(() => {
    //     getGif( category )
    //         .then( setimages );
    // }, [ category ]);

    return (
        <>

        <h3 className="animate__animated animate__bounce">{category}</h3>
        
        {
            loading && <p className="animate__animated animate__flash">Loading...</p>
        }

        <div className="card-grid">
            {
                images.map( ( img ) => (
                    <GifGridItem 
                    key = { img.id }
                    { ...img }
                    />
                ))
            }
        </div>
        </>
    )

}

export default GifGrid;
