export default function Data({name, email, mobile}) {
    return (
        <div className="">
            <div class="alert alert-success m-3" role="alert">
                <ul>
                    <li>{name}</li>
                    <li>{email}</li>
                    <li>{mobile}</li>
                </ul>
            </div>
        </div>
    )
}