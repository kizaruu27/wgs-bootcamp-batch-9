import { fetchYoutubeVideo } from "../features/Videos/youtubeVideos.js";
import {useDispatch, useSelector} from 'react-redux';
import { setSearch, setVideos } from "../features/YoutubeSlice/youtubeSlice.js";
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const searchKey = useSelector(state => state.youtube.searchKey);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const setVideoList = async (searchKey) => {
        if (searchKey === '') return false;

        const response = await fetchYoutubeVideo(searchKey);
        dispatch(setVideos(response));
        navigate('/list');
    }
    
    return(
        <div className="container w-50 text-center mt-3">
            <div className="search-bar">
                <h1>Youtube Lite🙏</h1>
                <div class="input-group mb-3">
                    <input type="text" className="form-control"  onChange={e => dispatch(setSearch(e.target.value))}/>
                    <button className="btn btn-success" type="button" onClick={() => { setVideoList(searchKey)}}>Search</button>
                </div>
            </div>
        </div>
    )
}