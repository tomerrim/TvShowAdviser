import { useEffect, useState } from 'react';
import { TvShowAPI } from './api/tv-show';
import s from './style.module.css';
import { backDropBaseUrl } from './config';
import { TVShowDetail } from './components/TVShowDetail/TVShowDetail';
import { Logo } from './components/LOGO/Logo';
import logoImg from './assets/images/logo.png'
import { TVShowList } from './components/TVShowList/TVShowList';
import { SearchBar } from './components/SearchBar/SearchBar';


export const App = () =>{

    const [currentTVShow,setCurrentTVShow] = useState();
    const [recommendationList,setRecommendationList] = useState([]);

    async function fetchPopulars(){
        try{
            const popularTVShowList = await TvShowAPI.fetchPopulars();
            if(popularTVShowList.length > 0){
                setCurrentTVShow(popularTVShowList[0])
            }
        }catch (error){
            alert("Something went wrong, Come back later");
        }
        
    }

    async function fetchRecommendations(tvShowId){
        try {
            const recListResponse = await TvShowAPI.fetchRecommendations(tvShowId);
            if(recListResponse.length > 0){
                setRecommendationList(recListResponse.slice(0,10));
            }
        } catch (error) {
            alert("Something went wrong, Come back later");
        }
        
    }

    async function fetchByTitle(title){
        try {
            const searchResponse = await TvShowAPI.fetchByTitle(title);
            if(searchResponse.length > 0){
                setCurrentTVShow(searchResponse[0]);
            }
        } catch (error) {
            alert("Something went wrong, Come back later");
        }
        
    }

    useEffect(() =>{
        fetchPopulars();
    },[])

    useEffect(() =>{
        if(currentTVShow){
            fetchRecommendations(currentTVShow.id);
        }
    },[currentTVShow])

    function updateCurrentTVShow(tvShow){
        setCurrentTVShow(tvShow);
    }

    return(
        <div className={s.main_container}
        style={{background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),url("${backDropBaseUrl}${currentTVShow.backdrop_path}") no-repeat center / cover` : "black"}}>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo img ={logoImg} title="WatchIt" subtitle="Find a show you may like"/>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <SearchBar onSubmit={fetchByTitle}/>
                    </div>
                </div>
            </div>
            <div className={s.tv_show_details}>
                { currentTVShow && <TVShowDetail tvShow={currentTVShow}/> }
            </div>
            <div className={s.recommended_tv_shows}>
                { currentTVShow && <TVShowList onClickItem={updateCurrentTVShow} tvShowList={recommendationList}/> }
            </div>
          
        </div>
    )
}