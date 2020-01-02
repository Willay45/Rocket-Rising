import React, {useState} from "react";
import MusicService from "../../tech/MusicService";
import './VolumeButton.css';

export default () => {
    const [volumeMuted, setVolumeMuted] = useState(MusicService.isMuted());
    let volumeButtonClasses = volumeMuted ? 'fa fa-volume-mute' : 'fa fa-volume-up';

    return (
        <div className="VolumeButton" >
            <button onClick={() => {
                if (volumeMuted) {
                    MusicService.unmute();
                } else {
                    MusicService.mute();
                }

                setVolumeMuted(!volumeMuted);
            }}>
                <i className={volumeButtonClasses} />
            </button>
        </div>
    )
}