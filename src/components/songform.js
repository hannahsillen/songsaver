import React from "react";

class SongForm extends React.Component{
     render(){
        return(
            <form onSubmit={this.props.addSong} className="song-form">
                <input 
                    type="text"
                    value={this.props.value}
                    name="song"
                    placeholder="song"
                    className="input"
                />
                <input 
                    type="text"
                    value={this.props.value}
                    name="artist"
                    placeholder="artist"
                    className="input"
                />
                <select name="genre" id="genre" value={this.props.value} className="input">
                    <option value="jazz">jazz</option>
                    <option value="rock">rock</option>
                    <option value="dnb">dnb</option>
                    <option value="pop">pop</option>
                    <option value="house">house</option>
                </select>
                <select name="stars" id="stars" value={this.props.value} className="input">
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    <option value="four">four</option>
                    <option value="five">five</option>
                </select>
                <button>add song</button>
            </form>
        )
    }
}

export default SongForm