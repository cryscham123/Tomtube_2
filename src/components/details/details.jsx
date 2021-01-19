import React from 'react';
import Items from '../items/items';
import "./details.scss";
import Youtube from "../../service/youtube";

const Details = ({ history, location: { state } }) => {
    const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
    if (state === undefined) {
        history.push("/");
        return null;
    } else {
        return (
            <div className="details">
                <div className="details__video">
                    <button className="details__video__des">
                        <i className="fas fa-chevron-down"></i>
                    </button>
                    <iframe id="ytplayer" type="text/html" width="720" height="405"
                        src={`https://www.youtube.com/embed/${state.id}`}
                        frameborder="0" allowfullscreen>
                    </iframe>
                    <div className="details__video__info">
                        <h3 className="details__video__info__title">{state.title}</h3>
                        <p className="details__video__info__channel">{state.channel}</p>
                    </div>
                </div>
                <Items youtube={youtube}/>
            </div>
        );
    }
};
export default Details;