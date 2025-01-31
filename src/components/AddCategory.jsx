import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {
        console.log(inputValue);
        setInputValue(target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        
        // setcategories( categories => [ ...categories, inputValue]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    
  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue } 
            onChange={ onInputChange }
            
        />
    </form>
  )
}
