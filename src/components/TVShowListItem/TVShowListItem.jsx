import s from './style.module.css';
import { smallImgBaseUrl } from '../../config';

const maxTitle = 20

export const TVShowListItem = ({tvShow,onClick}) =>{
    
    const onClickItem = () =>{
        onClick(tvShow);
    }

    return(
        <div className={s.container} onClick={onClickItem}> 
            <img src={smallImgBaseUrl + tvShow.backdrop_path} alt={tvShow.name} className={s.img} />
            <div className={s.title}>
                {tvShow.name.length > maxTitle ?  tvShow.name.slice(0,maxTitle) + "..." : tvShow.name}
            </div>
        </div>
    )
}