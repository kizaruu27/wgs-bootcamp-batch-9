export const url = 'https://youtube.googleapis.com/youtube/v3/search';
const APIKEY = 'AIzaSyDkY6B-zMhROLOfzMvBWakLbtTXyaLfAok';
export const config = (searchKey) => (
    {
        params : {
            part: 'snippet',
            maxResults: 5,
            q: searchKey,
            key: APIKEY
        }
    }
)

export const src = (id => `https://www.youtube.com/embed/${id}?si=YKoiDkzjjL7XUlDz`);