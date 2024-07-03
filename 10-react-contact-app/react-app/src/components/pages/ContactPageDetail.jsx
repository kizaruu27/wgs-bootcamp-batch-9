import ContactCard from "../fragments/ContactCard";
import Card from "../elements/Card";
import Modal from "../fragments/Modal";
import ModalBody from "../elements/ModalBody";
import { setContactDetail } from "../../backend/contactHandler";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ContactPageDetail() {
    const [contact, setContact] = useState({});
    const { id } = useParams();

    useEffect(() => {
        console.log('Params', id);
        setContactDetail(setContact, id);
    }, [0])

    return(
        <>
            <ContactCard>
                <Card id={contact.id} nama={contact.nama} email={contact.email} noHP={contact.nohp} />
            </ContactCard>

            <Modal>
                <ModalBody id={contact.id}/>
            </Modal>
        </>
    )
}