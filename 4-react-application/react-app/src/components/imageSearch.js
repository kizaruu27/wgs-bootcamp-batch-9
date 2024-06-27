import axios from 'axios';
import { Component } from 'react';

export default class ImageSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {images: []}
    }

    fetchImg (key) {
        const url = `https://api.unsplash.com/search/photos?query=${key.target.value}`;
        const clientID = 'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296';
        
        if (key.target.value === '') return false;

        const config = {
            headers: {
                Authorization: clientID
            }
        }

        axios.get(url, config)
            .then((res) => {
                const {images} = this.state;
                const imgArr = res.data.results;
                this.setState({images: imgArr});

                images.forEach(img => {
                    console.log(img.urls.raw);
                })
        })
    }

    render() {
        const {images} = this.state;
        return (
            <div className="mt-5 p-3">
                <h1 className='text-center mb-3'>Yok, silahkan cari</h1>
                <div class="img-search input-group flex-nowrap">
                    <span class="input-group-text btn btn-success" id="addon-wrapping">Search</span>
                    <input type="text" class="form-control" aria-describedby="addon-wrapping" onChange={e => this.fetchImg(e)} />
                </div>
                <div className='container d-flex flex-wrap gap-3 mt-5 justify-content-center'>
                    {images.map((img, key) => {
                        return(
                            <img key={key} src={img.urls.small} alt='Gambar'/>
                        )
                    })}
                </div>
            </div>
        )
    }
}