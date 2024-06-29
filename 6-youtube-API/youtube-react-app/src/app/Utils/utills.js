export const url = 'https://youtube.googleapis.com/youtube/v3/search';
const APIKEY = 'AIzaSyDkY6B-zMhROLOfzMvBWakLbtTXyaLfAok';
export const config = (value) => (
    {
        params : {
            part: 'snippet',
            maxResults: 5,
            q: value,
            key: APIKEY
        }
    }
)