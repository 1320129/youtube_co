import { Component } from 'react';
import './App.css';
import List from './component/list';
import View from './component/view';

class App extends Component {
state = {
  list:[],
  mode:"list",
  view_id:""
}

requestOptions = {
      method: "GET",
      redirect: "follow",
    };


  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&type=video&chart=mostPopular&key=AIzaSyAj36izoMK59dirlM0vtK7WcA18cM4BHcc`,
      this.requestOptions
    );
    const result = await response.json();
    const list = result.items;
    return this.setState({list})
  }

  componentDidMount(){
    this.mostPopular();
  }

  _getid = id => {
    console.log(id)
    this.setState({mode:"view",view_id:id})
  }
 
  _getmode = () => {
    if(this.state.mode == "list"){
      return <List list={this.state.list} getid={this._getid}/>
    }else if(this.state.mode == "view"){
      return <View id={this.state.view_id}/>
    }
  }

  render(){
    return (
      <div className="App">
        {this._getmode()}
      </div>
    );
  }
}

export default App;
