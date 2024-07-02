import ContactForm from "../fragments/ContactForm";
import FormTitle from "../elements/FormTitle";
import Form from "../elements/Form";
import { editContact } from "../../backend/contactHandler";
import { setContactDetail } from "../../backend/contactHandler";
import { useEffect, useState } from "react";

export default function EditContactForm({id}) {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [nohp, setNoHP] = useState('');
    const [contact, setContact] = useState([]);

    useEffect(() => {
        setContactDetail(setContact, id);
    }, [0])

    const editContactData = (e, nama, email, nohp) => {
        e.preventDefault();
        // Function Edit Data
        editContact(id, nama, email, nohp);

        setTimeout(() => {
            window.location.href = '/contact';
        }, 500);
    }

    return(
        <ContactForm>
            <FormTitle title='Form Edit Contact' />
            <Form onSubmit={e => editContactData(e, nama, email, nohp)} setNama={setNama} setEmail={setEmail} setNoHP={setNoHP} nama={contact.nama} email={contact.email} nohp={contact.nohp} />
        </ContactForm>
    )
}