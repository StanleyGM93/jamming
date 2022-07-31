import React from "react";
import { Track } from "../track/track";

import './tracklist.css';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList" >
                {
                    this.props.tracks.map(track => {
                        return <Track track={track}
                                key={track.id}
                                onAdd={this.props.onAdd} />
                    })
                }
            </div>
        )
    }
}