import axios from 'axios';
import { url, config } from '../../app/Utils/utills';

export const fetchYoutubeVideo = async (searchKey) => {
    try {
        const response = await axios.get(url, config(searchKey));
        const data = response.data.items;

        // console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}