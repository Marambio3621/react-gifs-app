import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( {category} ) => {

    const {gif, isLoading} = useFetchGifs(category);

    return (
    <>
        <h3> { category } </h3>

        {
            isLoading
            ? (<h2>cargando</h2>)
            : null
        }

        <div className="card-grid">
            {
                gif.map( ({id, title, url}) => ( 
                    <GifItem key={id} title={title} url={url}/>
                ))
            }
        </div>
    </>
    )
}
