import React from 'react';
import Tile from './Tile';
import './Tile.css';
import Skycons from 'skycons-component'


const Result = (props) => {
let content = '';
const {data} = props;
const {currentData} = props;
const week = ['Niedziela','Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
if(data){
    data.shift();
    content = (
        content = data.map(item => <Tile key={item.time} data={item}/> ) 
        )
}
    return (
        <>
    {content ? <div className="current">
    <h4>Dzisiaj, {week[new Date(props.currentData.time *1000).getDay()]}</h4>
    <Skycons
      	 animate={true}
      	 iconColor='snow'
      	 style={{width: 70, height: 70}}
      	 icon={currentData.icon}
    />
    <p className="current">{Math.floor(currentData.temperature)} C °</p>
    <p>{currentData.summary}</p>
    </div> : 'animacja'}
    <div className="tiles">
    {content ? content: 'animacja'}
    </div>
    
        </>
      );
}
 
export default Result;