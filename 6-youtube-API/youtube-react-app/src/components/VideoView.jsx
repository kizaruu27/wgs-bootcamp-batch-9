import { useSelector, useDispatch } from "react-redux";
import { setSelectedVides, setIsSelected } from '../features/YoutubeSlice/youtubeSlice';


export default function VideoView() {
    const allVideos = useSelector(state => state.youtube.videos);
    const selectedVideos = useSelector(state => state.youtube.selectedVideo);

    const dispatch = useDispatch();
    const assignSelectedVideos = (video) => {
        dispatch(setSelectedVides(video));
        dispatch(setIsSelected(true));
    }

    return  (
        <div className="view-container container">  
            <div className="video-play">
                <iframe width="870" height="500" src={`https://www.youtube.com/embed/${selectedVideos.id.videoId}?si=YKoiDkzjjL7XUlDz`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h3>{selectedVideos.snippet.title}</h3>
                <p>{selectedVideos.snippet.channelTitle} | {new Date(selectedVideos.snippet.publishTime).toLocaleDateString()}</p>
                <p>{selectedVideos.snippet.description}</p>
            </div>
            <div className="video-list">
                {
                    allVideos.map((video, key) => (
                        <div key={key} className='video-item' onClick={() => assignSelectedVideos(video) }>
                            <div className="thumbnail">
                                <img src={video.snippet.thumbnails.default.url} alt="" srcset="" />
                            </div>
                            <div className='video-description'>
                                <h5>{video.snippet.title}</h5>
                                <p>{video.snippet.channelTitle} |  {new Date(video.snippet.publishTime.toString()).toLocaleDateString()}</p>
                                <p>{video.snippet.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}