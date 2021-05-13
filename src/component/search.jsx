import React,{Component} from 'react';

class Search extends Component{
    searchRef = React.createRef();
    _getsearch = (e) => {
        e.preventDefault();
        const search = this.searchRef.current.value;
        {this.props.search(search)}
    }
    render(){
        return(
            <form onSubmit={this._getsearch}>
                <input type="text" ref={this.searchRef} />
                <input type="submit" value="검색"></input>   
            </form>
        );
    }
}

export default Search