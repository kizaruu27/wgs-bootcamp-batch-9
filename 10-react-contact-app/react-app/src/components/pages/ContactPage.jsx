import Contact from "../fragments/Contact";
import ContactPageTitle from "../elements/ContactPageTitle";
import AddContactButton from "../elements/AddContactButton";
import ContactTable from "../elements/ContactTable";
import FlashMessage  from 'react-flash-message';

export default function ContactPage() {
    return(
        <Contact>
            {/* <FlashMessage duration={2000} persistOnHover={true}>
                <p>Message</p>
            </FlashMessage> */}
            <ContactPageTitle title='Daftar Contact' />
            <AddContactButton text='Tambah Contact' href='/contact/add' />
            <ContactTable />
        </Contact>
    )
}