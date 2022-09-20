import { useState } from "react"



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <=1) return;

        onNewCategory( inputValue.trim());
        setInputValue('')
    }

    return (
        <div>

            <form onSubmit={ (e) => onSubmit(e)}>
                <input type="text" name="value" id='value' value= {inputValue} placeholder="Buscar gifs" onChange={ (e) => onInputChange(e) }/>
            </form>
            
        </div>
    )
}