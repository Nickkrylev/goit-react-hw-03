
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import dataUserContacts from './data/userContacts.json'
import { useState,useEffect } from 'react'
import { nanoid } from 'nanoid'
function App() {
const [userContacts,setUserContacts] = useState( JSON.parse( localStorage.getItem("dataContact")) ?? dataUserContacts);

useEffect(() => {
  
  localStorage.setItem('dataContact', JSON.stringify(userContacts));
}, [userContacts]);

const [filter,setFilter] = useState("");

const onChangeFilter = (event) =>{
    setFilter(event.target.value)
}

const filteredUsers = userContacts.filter((contact) =>
contact.name.toLowerCase().includes(filter.toLowerCase())
);
const addNewContact = (formaData) => {
    const finalUser = {
      ...formaData,
      id: nanoid()
    }
    setUserContacts([...userContacts,finalUser]);
}
const onDeleteContact = (ContactID) =>{
  setUserContacts( prevContacts => prevContacts.filter(contact => contact.id !== ContactID))
}
  return (
    <>
      <div>
  <h1>Phonebook</h1>
  <ContactForm addNewContact ={addNewContact}/>
  <SearchBox onChangeFilter={onChangeFilter} filter={filter}/>
  <ContactList onDeleteContact={onDeleteContact} dataContact = {filteredUsers} />
</div>

    </>
  )
}

export default App
