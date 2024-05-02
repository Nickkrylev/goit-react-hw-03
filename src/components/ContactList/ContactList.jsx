import Contact from "../Contact/Contact";
function ContactList({onDeleteContact ,dataContact}) {

    return (
      <>
           <div >

{dataContact.map((contact) => (

    <Contact  key={contact.id} onDelete={onDeleteContact} dataContact ={contact}/>
 
))}
</div>
      </>
    );
  }
  
  export default ContactList;
  