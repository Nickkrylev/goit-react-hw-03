import {useId} from 'react';
import css from "./SearchBox.module.css"
function SearchBox({onChangeFilter,filter}) {
  const nameFieldId = useId();
    return (
      
      <>
        <label htmlFor={nameFieldId}>Find contacts by name</label>
        <input type="text" id={nameFieldId} onChange={onChangeFilter} placeholder="Search..." value={filter}></input>
      </>
      
    );
  }
  
  export default SearchBox;