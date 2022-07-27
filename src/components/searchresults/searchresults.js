import React from "react";
import { TrackList } from "../tracklist/tracklist"

export class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults"
                searchResults={this.state.searchResults}
                tracks={this.props.searchResults}>
                <h2>Results</h2>
                <TrackList />
            </div>
        )
    }
}