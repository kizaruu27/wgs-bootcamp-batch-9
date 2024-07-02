import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContactID } from "../../redux/slicer/contactSlicer";

export default function ContactList({id, nama, email, num}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setContact = (id) => {
        dispatch(setContactID(id));
        navigate(`/contact/detail/${id}`);
    }

    return (
        <>
            <tr>
                <th scope="row">{num + 1}</th>
                <td>{nama}</td>
                <td>{email}</td>
                <td>
                    <a className="btn btn-success badge" onClick={() => setContact(id)} >detail</a>
                </td>
            </tr>
        </>
        
    )
}