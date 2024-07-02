import React from "react";
import { deleteContact } from "../../backend/contactHandler";

export default function ModalBody({id}) {

    const deleteContactData = (e) => {
        e.preventDefault();
        deleteContact(id);
        setTimeout(() => {
            window.location.href = '/contact';
        }, 500);
    }

    return (
        <div className="modal-dialog">
            <div className="modal-content">

                <div className="modal-header">
                <h4 className="modal-title">Confirmation</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
        
                <div className="modal-body">
                    Apakah anda yakin ingin menghapus contact ini?
                </div>
        
                <div className="modal-footer">
                    <button onClick={(e) => deleteContactData(e)} className="btn btn-primary">Ya</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Tidak</button>
                </div>
        
            </div>
        </div>
    )
}