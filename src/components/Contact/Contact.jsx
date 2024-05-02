import css from "./Contact.module.css"
function Contact({onDelete,dataContact}) {
  return (
    <div className={css.boxContact}>
      <div   >
        <div className={css.field}>
          <img src="./img/avatar.png" alt="name" className={css.icon}/>
          <span>{dataContact.name}</span>
        </div>
        <div className={css.field}>
          <img src="./img/phone.png" alt="phone"  className={css.icon}/>
          <span>{dataContact.number}</span>
        </div>
      </div>
      <button onClick={() => onDelete(dataContact.id)} className={css.button} >DELETE</button>
    </div>
  )
}

export default Contact