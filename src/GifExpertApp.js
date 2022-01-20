import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categorias = ['Naruto', 'Dragon ball', 'Samurai X'];
    const [categories, setCategories] = useState(['Dragon ball']);
    
    //const handleAdd = () => setCategories([...categories, 'One Punch']);
    //const handleAdd = () => setCategories( cat => [...cat, 'One Punch']);

    return (
        <>
            <h2>¡Hola bienvenido a la Jefesito App buscador de gifs!</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;