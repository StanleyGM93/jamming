import React from 'react';
import './App.css';

import {SearchBar} from '../searchbar/searchbar';
import {SearchResults} from '../searchresults/searchresults';
import {Playlist} from '../playlist/playlist';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
                      { name: 'name2', artist: 'artist2', album: 'album2', id: 2 }],
      playlistName: 'playlistName',
      playlistTracks: [{ name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 4 },
                      { name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 5 },
                      { name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 6 }]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
