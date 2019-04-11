import React, { Component } from 'react';
import './Tile.css';
import Skycons from 'skycons-component'

class Tile extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }
    componentDidMount(){
    
    }
    render() { 
        const {time, summary,temperatureHigh, icon} = this.props.data;
        const week = ['Niedziela','Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
        const day = week[new Date(time *1000).getDay()];
        return ( 
            <>
        <div className="tile">
        <h4>{day}</h4>
        <Skycons
      	  	 animate={true}
      	 iconColor='snow'
      	 style={{width: 70, height: 70}}
      	 icon={icon}
       		/>
        <p>{Math.floor(temperatureHigh)} C °</p>
        <p>{summary}</p>
        </div>
        </>
         );
    }
}
 
export default Tile;


// const Tile = (props) => {
    
//     componentDidUpdate(){
//         console.log('dziala')
//     }
//     return ( 
        
//      );
// }
 
// export default Tile;