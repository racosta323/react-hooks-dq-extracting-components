import { render } from "react-dom"

import Contact from "./Contact"

function Contacts({ contacts }){
    

    const renderContacts = () => { 
        return contacts.map((person)=>{
            return <Contact name={person.name} key={person.id}/>
        })
    }

    return(
    <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
           { renderContacts() }
        </ul>
      </nav>
      )
}

export default Contacts