import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

useState


 export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (e) => {

        if(categories.includes(e)) return;
        else{
            setCategories (categories => [e, ...categories])}
    }



    return (
        <>  
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { onAddCategory }
            />

            <ol>
                { categories.map((category) => (
                    <GifGrid key={category} category = {category} />
                    ))
             }
            </ol>
        </>
    )
}