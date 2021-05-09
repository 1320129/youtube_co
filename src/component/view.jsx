import React, {Component} from 'react'

class View extends Component{
    _listmode = () => {
        this.props.mode("list")
    }
    render(){
        return(
            <div className="video">
                <iframe id="player" type="text/html" width="640" height="360"src={`https://www.youtube.com/embed/${this.props.id}`} frameborder="0"></iframe>
                <a href="#" onClick={this._listmode}>목록보기</a>
            </div>
        );
    }
}

export default View;