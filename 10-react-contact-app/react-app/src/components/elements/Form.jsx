export default function Form({onSubmit, setNama, setEmail, setNoHP, nama, email, nohp}) {
    return(
        <form onSubmit={onSubmit}>
            <div className="mb-3 mt-3">
                <label htmlFor="nama" className="form-label">Nama</label>
                <input type="text" className="form-control" id="nama" placeholder={nama ? nama : 'Masukkan nama contact'} name="nama" onChange={e => setNama(e.target.value)} required />
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" placeholder={email ? email : 'Masukkan email'} name="email" onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="nohp" className="form-label">No HP</label>
                <input type="text" className="form-control" id="nohp" placeholder={nohp ? nohp : 'Masukkan no HP'} name="nohp" onChange={e => setNoHP(e.target.value)} required />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}