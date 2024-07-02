export default function Modal({children}) {
    return (
        <div className="modal fade" id="delete-modal">
            {children}
        </div>
    )
}