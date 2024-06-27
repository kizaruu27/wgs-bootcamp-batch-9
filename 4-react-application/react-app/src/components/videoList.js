export default function VideoList({videoData, onTitleClick}) {
    return (
        <div className="video-container container d-flex flex-column w-50"  >
                {videoData.map((video, key) => {
                    return (
                        <div className="video-item my-5" key={key} onClick={() => onTitleClick(video.id.videoId, video.snippet.thumbnails.high.url, video.snippet.title, video.snippet.description, new Date(video.snippet.publishedAt.toString()).toLocaleDateString(), videoData)}>
                            <h3>{video.snippet.title}</h3>
                            <p>{new Date(video.snippet.publishedAt.toString()).toLocaleDateString()}</p>
                            <p>{video.snippet.description}</p>
                        </div>
                    )
                })}
        </div>
    )
}