import { fetchYoutubeVideo } from "../features/Videos/youtubeVideos.js";
import {useDispatch, useSelector} from 'react-redux';
import {setSearch, setVideos} from "../features/YoutubeSlice/youtubeSlice.js";

export default function SearchBar() {
    const searchKey = useSelector(state => state.youtube.searchKey);
    const dispatch = useDispatch();

    const setVideoList = async (searchKey) => {
        const response = await fetchYoutubeVideo(searchKey);
        dispatch(setVideos(response));
    }
    
    return(
        <div className="search-bar">
            <h1>Youtube Lite🙏</h1>
            <div class="input-group mb-3">
                <input type="text" className="form-control"  onChange={e => dispatch(setSearch(e.target.value))}/>
                <button className="btn btn-success" type="button" onClick={() => { setVideoList(searchKey)}}>Search</button>
            </div>
        </div>
    )
}