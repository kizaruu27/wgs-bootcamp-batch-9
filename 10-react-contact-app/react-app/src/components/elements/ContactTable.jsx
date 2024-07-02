import ContactList from "./ContactList";
import { setContactData } from "../../backend/contactHandler";
import { useState, useEffect } from "react";

export default function ContactTable() {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        setContactData(setContacts);
    }, [0]);
    

    return (
        <table className="table mt-3">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody>
            {
                contacts.map((contact, key) => (
                    <ContactList num={key} key={key} id={contact.id} nama={contact.nama} email={contact.email}/>
                ))
            }
            </tbody>
        </table>
    )
}