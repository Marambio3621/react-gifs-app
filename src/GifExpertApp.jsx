import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Happy'])

    const onAddCategory = (NewCategory) =>{

        if( categories.includes(NewCategory)) return;
        setCategories( categories => [NewCategory, ...categories]);
    }

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory={value => onAddCategory(value)}
        />


        {/*<button onClick={onAddCategory}>Agregar</button>*/}

        {
            categories.map( (category) => (
                <GifGrid key={category} category={category}/>
                ))
        }

    </>
  )
}
