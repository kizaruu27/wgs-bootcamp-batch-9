import ContactForm from "../fragments/ContactForm";
import FormTitle from "../elements/FormTitle";
import Form from "../elements/Form";
import { addContact } from "../../backend/contactHandler";
import { useState } from "react";

export default function AddContactForm() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [nohp, setNoHP] = useState('');

    const addNewContact = (e, nama, email, nohp) => {
        e.preventDefault();
        addContact(nama, email, nohp);

        setTimeout(() => {
            window.location.href = '/contact';
        }, 500);
    }

    return(
        <ContactForm>
            <FormTitle title='Form Tambah Contact' />
            <Form  onSubmit={(e) => addNewContact(e, nama, email, nohp)} setNama={setNama} setEmail={setEmail} setNoHP={setNoHP}/>
        </ContactForm>
    )
}