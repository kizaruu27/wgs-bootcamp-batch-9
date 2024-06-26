import { Component } from "react";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: ''
        }
    }

    showData(e) {
        e.preventDefault();
        const {name, email, mobile} = this.state;
        return name === '' || email === '' || mobile === '' ? 'Silahkan Isi Form Dengan Benar!' : `Nama: ${name}\nEmail: ${email}\nNoHP: ${mobile}`;
    }

    render() {
        return(
            <div className="input-form mt-5">
                <h1 className="text-center">Form</h1>
                <form class="ui form" onSubmit={(e) => alert(this.showData(e))}>
                    <div class="field">
                        <label htmlFor="nama">Nama</label>
                        <input type="text" name="name" id="name" onChange={e => this.setState({name: e.target.value})}/>
                    </div>
                    <div class="field">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" onChange={e => this.setState({email: e.target.value})}/>
                    </div>
                    <div class="field">
                        <label>No HP</label>
                        <input type="text" name="mobile" id="mobile" onChange={e => this.setState({mobile: e.target.value})}/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <button className="btn btn-success text-center">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}