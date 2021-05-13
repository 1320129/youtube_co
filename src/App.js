import { Component } from 'react';
import './App.css';
import List from './component/list';
import View from './component/view';
import Search from './component/search';

class App extends Component {
state = {
  list:[],
  mode:"list",
  view_id:"",
  search:"post malone"
}

requestOptions = {
      method: "GET",
      redirect: "follow",
    };


    

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.search}&key=AIzaSyAj36izoMK59dirlM0vtK7WcA18cM4BHcc`,
      this.requestOptions
    );
    const result = await response.json();
    const list = result.items;
    return this.setState({list})
  }


  _getid = async (id) => {
    console.log(id)
    this.setState({mode:"view",view_id:id})
  }

  _getlist = list => {
    this.setState({mode:list})
  }

  _getsearch = async (search) => {
   this.setState({search})
   setTimeout(() => {
    this.mostPopular();
   }, 50);
   
  }

  componentDidMount(){
    this.mostPopular();
  }
 
  
  _getmode = () => {
    if(this.state.mode == "list"){
      return <List list={this.state.list} getid={this._getid}/>
    }else if(this.state.mode == "view"){
      return <View id={this.state.view_id} mode={this._getlist}/>
    }
  }

  render(){
    return (
      <div className="App">
        <Search search={this._getsearch}/>
        {this._getmode()}
      </div>
    );
  }
}

export default App;
