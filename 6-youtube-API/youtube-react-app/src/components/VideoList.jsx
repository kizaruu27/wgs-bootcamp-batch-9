import {useSelector, useDispatch} from 'react-redux';
import { setSelectedVides, setIsSelected } from '../features/YoutubeSlice/youtubeSlice';


export default function VideoList() {
    const videos = useSelector(state => state.youtube.videos);

    const dispatch = useDispatch();
    const assignSelectedVideos = (video) => {
        dispatch(setSelectedVides(video));
        dispatch(setIsSelected(true));
    }

    return (
        <div className='video-container'>
            {
                videos.map((video, key) => (
                    <a href='#' key={key} className='video-item' onClick={() => assignSelectedVideos(video) }>
                        <div className="thumbnail">
                            <img src={video.snippet.thumbnails.default.url} alt="" srcset="" />
                        </div>
                        <div className='video-description'>
                            <h5>{video.snippet.title}</h5>
                            <p>{video.snippet.channelTitle} | {new Date(video.snippet.publishTime.toString()).toLocaleDateString()}</p>
                            <p>{video.snippet.description}</p>
                        </div>
                    </a>
                ))
            }
        </div>
    ) 
}