import {useSelector, useDispatch} from 'react-redux';
import { setSelectedVides } from '../features/YoutubeSlice/youtubeSlice';
import { useNavigate } from 'react-router-dom';


export default function VideoList() {
    const videos = useSelector(state => state.youtube.videos);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const assignSelectedVideos = (video) => {
        dispatch(setSelectedVides(video));
        navigate('/view');
    }

    return (
        <div className='video-container'>
            {
                videos.map((video, key) => (
                    <div key={key} className='video-item' onClick={() => assignSelectedVideos(video) }>
                        <div className="thumbnail">
                            <img src={video.snippet.thumbnails.default.url} alt=""  />
                        </div>
                        <div className='video-description'>
                            <h5>{video.snippet.title}</h5>
                            <p>{video.snippet.channelTitle} | {new Date(video.snippet.publishTime.toString()).toLocaleDateString()}</p>
                            <p>{video.snippet.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    ) 
}