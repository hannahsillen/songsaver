import React from "react";


class Songlist extends React.Component{
     render(){
        return(
            <tr className="song-list">
                <td>
                    {this.props.song.song}
                </td>
                <td>
                    {this.props.song.artist}
                </td>
                <td>
                    {this.props.song.genre}
                </td>
                <td>
                    {this.props.song.star}
                </td>
                <td>
                    <button value={this.props.song.id} onClick={this.props.deletesong}>delete song</button>
                </td>
            </tr>
        )
    }
}

export default Songlist