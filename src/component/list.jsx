import React, { Component } from 'react';

class List extends Component {
    _getid = e => {
        var tt = e.target;
        var getsrc = tt.getAttribute("src");
        var getid = getsrc.substring(23,34);
         this.props.getid(getid)
    }
    render() {
        return (
           
            <div>
                <ul className="list_wrap">
                    {this.props.list.map((item,index)=>
                        {
                            return <li key={index}>
                                <div className="thum" onClick={this._getid}>
                                    <img src={item.snippet.thumbnails.high.url}/>
                                </div>
                                {item.snippet.title}
                                {console.log(item)}
                                </li>
                        })}
                </ul>
            </div>
        );
    }
}

export default List;