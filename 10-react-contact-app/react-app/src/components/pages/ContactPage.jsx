import Contact from "../fragments/Contact";
import ContactPageTitle from "../elements/ContactPageTitle";
import AddContactButton from "../elements/AddContactButton";
import ContactTable from "../elements/ContactTable";

export default function ContactPage() {
    return(
        <Contact>
            <ContactPageTitle title='Daftar Contact' />
            <AddContactButton text='Tambah Contact' href='/contact/add' />
            <ContactTable />
        </Contact>
    )
}