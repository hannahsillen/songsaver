import React from "react"
import SongForm from "./songform"
import SongList from "./songlist"

class SongOverview extends React.Component {
    constructor() {
        super()
        this.state = {
            songs: [],
        }
    }
  
    addSong = (song) => {
        song.preventDefault()
        const songname = song.target[0].value
        const artistname = song.target[1].value
        const genrename = song.target[2].value
        const stars = song.target[3].value
        var newID = this.state.songs.length + 1
        this.setState(state => ({
            songs: [...state.songs, {id: newID, song: songname, artist: artistname, genre: genrename, star: stars}]
        }))
    }
    deletesong = (remove) => {
        const removeid = remove.target.value
        this.setState(prev => ({songs: prev.songs.filter(song => song.id != removeid)}))
    }

    deletesongs = () => {
        this.setState({songs: []})
    }
    
    render() {
        const songlist = this.state.songs.map(song => 
            <SongList song={song} key={song.id} deletesong={this.deletesong}/>)
        return (
            <div>
                <SongForm addSong={this.addSong} />
                <table style={{width: "100%"}}>
                    <thead className="table">
                        <tr className="song-header">  
                            <th className="song-row__item">Song</th>
                            <th className="song-row__item">Artist</th>
                            <th className="song-row__item">Genre</th>
                            <th className="song-row__item">Rating</th>
                            <th className="song-row-item" onClick={this.deletesongs}>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songlist}
                    </tbody>
                </table>
            </div>
        );
    }
}
  
export default SongOverview;