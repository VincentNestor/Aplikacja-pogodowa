import React, { Component } from 'react';
import './App.css';
import Result from './Result';

class App extends Component {
    
  state = {
    data:null,
    currentData:null,
    long:'',
    lat:'',
  }

  componentDidMount = () =>{
      if(navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(position => {
          this.setState({
            long:position.coords.longitude,
            lat:position.coords.latitude,
          })
          this.getData()
        });
      }
  }

  getData(){
      const proxy = 'https://cors-anywhere.herokuapp.com/';
        const APIKey = `83f0299210404e4927b388bb5864b7c5`;
        const api = `${proxy}https://api.darksky.net/forecast/${APIKey}/${this.state.lat},${this.state.long}?lang=pl&units=si`;
        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response)
            this.setState({
              currentData: response.currently,
              data: response.daily.data,
            })
        })
    
  }
      
  render() {
    
    return (
      <div className="App">
      <Result data={this.state.data} currentData={this.state.currentData}/>
      <h6>Powered by <a target="blank" href="https://darksky.net/dev">Dark Sky</a></h6>
      <h6 className="photo">Obraz <a target="blank" href="https://pixabay.com/pl/users/PublicDomainPictures-14/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=164989"> PublicDomainPictures</a> z <a target="blank" href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=164989"> Pixabay</a></h6>
      </div>
    );
  }
}

export default App;
