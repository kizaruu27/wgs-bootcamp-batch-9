import {useSelector} from 'react-redux';

export default function VideoList() {
    const videos = useSelector(state => state.youtube.videos);

    return (
        <>
            {
                videos.map((video, key) => (
                    <div key={key}>
                        {video.snippet.title}
                    </div>
                ))
            }
        </>
    ) 
}