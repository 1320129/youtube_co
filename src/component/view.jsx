import React, {Component} from 'react'

class View extends Component{
    render(){
        return(
            <div className="video">
                <iframe id="player" type="text/html" width="640" height="360"src={`https://www.youtube.com/embed/${this.props.id}`} frameborder="0"></iframe>
            </div>
        );
    }
}

export default View;