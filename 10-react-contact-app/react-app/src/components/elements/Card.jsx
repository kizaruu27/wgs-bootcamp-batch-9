import { useNavigate } from "react-router-dom";

export default function Card({id, nama, email, noHP}) {
    const navigate = useNavigate();

    const navigateToEditForm = (id) => {
        navigate(`/contact/update/${id}`);
    }

    return(
        <div className="card w-50">
            <div className="card-body">
                <h4 className="card-title">{nama}</h4>
                <p className="card-text">{email}</p>
                <p className="card-text">{noHP}</p>
                <a href="/contact" className="card-link d-block mb-3">&laquo; Kembali ke halaman contact</a>
                <button type="button" className="btn btn-danger badge" data-bs-toggle="modal" data-bs-target="#delete-modal">
                    delete
                </button>
                <button onClick={() => navigateToEditForm(id)} className="btn btn-success badge" >edit</button>
            </div>
        </div>
    )
}