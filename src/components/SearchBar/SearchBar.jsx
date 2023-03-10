import s from './style.module.css'
import { Search as SearchIcon } from 'react-bootstrap-icons';
import { useState } from 'react';

export const SearchBar = ({onSubmit}) =>{

    const [value,setValue] = useState("")

    function submit(e){
        if(e.key === "Enter" && e.target.value.trim() !== ""){
            onSubmit(e.target.value);
            setValue("");
        }
    }

    function handleChange(e){
        setValue(e.target.value);
    }

    return(
        <>
        <SearchIcon size={27} className={s.icon}/>
        <input type="text" className={s.input}
         placeholder={"Search a TV show you may like"} onKeyUp={submit}
         value={value} onChange={handleChange} />
        </>
    )
}