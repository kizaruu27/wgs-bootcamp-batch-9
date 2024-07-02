import axios from 'axios';
import { urlEndpoint } from './url';

export const setContactData = (setContacts) => {
    axios.get(`${urlEndpoint}/contact`)
        .then((res) => {
            const data = res.data;
            setContacts(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
}

export const setContactDetail = (setContact, id) => {
    axios.get(`${urlEndpoint}/contact/detail/${id}`)
        .then((res) => {
            const data = res.data;
            console.log(data);
            setContact(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
}

export const deleteContact = (id) => {
    axios.delete(`${urlEndpoint}/contact/delete/${id}`)
        .then((res) => {
            console.log('Data berhasil dihapus!');
        })
        .catch((err) => {
            console.log(err.message);
        })
}

export const addContact = (nama, email, nohp) => {
    axios.post(`${urlEndpoint}/contact/add`, {
        nama, email, nohp
    })
    .then((res) => {
        console.log('Data berhasil ditambah!');
    })
    .catch((err) => {
        console.log(err.message);
    })
}

export const editContact = (id, nama, email, nohp) => {
    axios.put(`${urlEndpoint}/contact/update/${id}`, {
        nama, email, nohp
    })
    .then((res) => {
        console.log('Data berhasil diubah!');
    })
    .catch((error) => {
        console.log(error.message);
    })
}