import {useSelector, useDispatch} from 'react-redux';
import {changeCustomerAddress, changeCustomerName} from '../features/customerSlice';
import { useState } from 'react';

export default function CustomerEditor() {
    const customerName = useSelector(state => state.customer.customerName);
    const customerAddress = useSelector(state => state.customer.customerAddress);

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    return(
        <div className='container text-center'>
            <h1 className='my-3'>Nama Customer: {customerName}</h1>
            <h2 className='my-3'>Alamat Customer: {customerAddress}</h2>

            <div>
                <input className='my-3' type="text" placeholder='Masukkan nama customer baru' onChange={(e) => setName(e.target.value)}/>
                <button className='btn btn-outline-primary mx-3' onClick={() => dispatch(changeCustomerName(name))}>Submit</button>
            </div>
            <div>
                <input className='my-3' type="text" placeholder='Masukkan alamat baru' onChange={(e) => setAddress(e.target.value)}/>
                <button className='btn btn-outline-primary mx-3' onClick={() => dispatch(changeCustomerAddress(address))}>Submit</button>
            </div>
        </div>
    )
}