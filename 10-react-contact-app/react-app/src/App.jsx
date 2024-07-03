import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import ContactPageDetail from "./components/pages/ContactPageDetail";
import AddContactForm from "./components/pages/AddContactForm";
import EditContactForm from "./components/pages/EditContactForm";
import Navbar from './components/fragments/Navbar';
import { useSelector } from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {
    const contactID = useSelector(state => state.contact.id);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" Component={HomePage}/>
                <Route path="/about" Component={AboutPage}/>
                <Route path="/contact" Component={ContactPage}/>
                <Route path="/contact/add" Component={AddContactForm}/>
                <Route path={`/contact/update/:id`} element={<EditContactForm id={contactID}/>}/>
                <Route path={`/contact/detail/:id`} Component={ContactPageDetail}/>
            </Routes>
        </Router>
    )
}