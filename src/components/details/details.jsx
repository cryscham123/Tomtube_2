import React, {useRef} from 'react';
import Items from '../items/items';
import "./details.scss";
import Youtube from "../../service/youtube";

const Details = ({ history, location: { state } }) => {
    const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
    const desRef = useRef();
    const btnRef = useRef();
    let i = 0;
    const handleClick = () => {
        if (i === 0) {
            desRef.current.style.display = "contents";
            btnRef.current.style.transform = "rotate(180deg)";
            i = 1;
        } else if (i === 1) {
            desRef.current.style.display = "none";
            btnRef.current.style.transform = "rotate(0deg)";
            i = 0;
        }
    }
    if (state === undefined) {
        history.push("/");
        return null;
    } else {
        return (
            <div className="details">
                <div className="details__video">
                    <iframe id="ytplayer" type="text/html" width="720" height="405"
                        src={`https://www.youtube.com/embed/${state.id}`}
                        frameBorder="0" allowFullScreen>
                    </iframe>
                    <div className="details__video__info">
                        <h3 className="details__video__info__title">{state.title}</h3>
                        <p className="details__video__info__channel">{state.channel}</p>
                    </div>
                    <div className="details__video__des">
                        <div className="details__video__des__deswrapper">
                            <p ref={desRef} className="details__video__des__deswrapper__des">
                                <p className="ulala">{state.des}</p>
                            </p>
                        <button ref={btnRef} onClick={handleClick} className="details__video__des__deswrapper__btn">
                            <i className="fas fa-chevron-down"></i>
                        </button>
                        </div>
                    </div>
                </div>
                <Items youtube={youtube}/>
            </div>
        );
    }
};
export default Details;