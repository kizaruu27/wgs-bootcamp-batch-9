import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContactID } from "../../redux/slicer/contactSlicer";
import { Link } from "react-router-dom";

export default function ContactList({id, nama, email, num}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const setContact = (id) => {
    //     dispatch(setContactID(id));
    //     navigate(`/contact/detail/${id}`);
    // }

    return (
        <>
            <tr>
                <th scope="row">{num + 1}</th>
                <td>{nama}</td>
                <td>{email}</td>
                <td>
                    <Link to={`/contact/detail/${id}`}>
                        <button className="btn btn-success badge" >detail</button>
                    </Link>
                </td>
            </tr>
        </>
        
    )
}