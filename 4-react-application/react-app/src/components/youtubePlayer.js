import axios from "axios";
import { useState } from "react";
import VideoList from "./videoList";
import VideoView from "./videoView";

export default function YoutubePlayer() {
    const [isSelected, setIsSelected] = useState(false);
    const [videoData, setVideoData] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedVideo, setSelectedVideo] = useState({});

    const url = 'https://youtube.googleapis.com/youtube/v3/search';
    const APIKEY = 'AIzaSyAJNbkA_cfr7sB1hBZffsjH1GOt4wEv07g';

    const fetchYoutube = async (value) => {
        try {
            const response = await axios.get(url, {
                params : {
                    part: 'snippet',
                    maxResults: 5,
                    q: value,
                    key: APIKEY
                }
            });
            const data = response.data.items;
            setVideoData(data);
            console.log(videoData);
            setIsSelected(false);
            
        } catch (error) {
            console.log(error.message);
        }
    }

    const showVideo = (url, thumbnail, title, description, timeStamp) => {
        setIsSelected(true);
        setSelectedVideo({url, thumbnail, title, description, timeStamp});
        console.log(selectedVideo);
    }

    return (
        <div className="mt-5 p-3">
            <h1 className='text-center mb-3'>Youtube Versi Lite ✌</h1>
            <div class="img-search input-group flex-nowrap mb-3">
                    <span class="input-group-text btn btn-success" id="addon-wrapping" onClick={() => fetchYoutube(search)}>Search</span>
                    <input type="text" class="form-control" aria-describedby="addon-wrapping" onChange={(e) => setSearch(e.target.value)}/>
            </div>

            {!isSelected ? <VideoList videoData={videoData} onTitleClick={showVideo}/> : <VideoView selectedVideo={selectedVideo} videoData={videoData} onTitleClick={showVideo}/>}
        </div>
    )
}