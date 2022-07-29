import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState( true )
    
    const getGif = async() =>{
        const newGifs = await getGifs(category)
        setGifs(newGifs)
        setIsLoading(false);
    }

    useEffect(() => {
        getGif();
    }, [])

    return {
        gif: gifs,
        isLoading: isLoading
    }
}
