// import SelectInput from '@material-ui/core/Select/SelectInput';
import React from 'react'
import {useState,useEffect} from 'react'
import MainHeading from './MainHeading';
import './Otherpage.css'
import axios from './axios.js'
// this is page where we will prove search bars and data entry
function Otherpage() {

    const [id,setId] = useState();
    const [name,setName] = useState('');
    const [minvalue,setMinvalue] = useState();
    const [maxvalue,setMaxvalue] = useState();
   
    const feednow = (event)=>{
        axios.post('/new',{
            id:id,
            name:      name,
            minvalue : minvalue,
            maxvalue:   maxvalue,
        }).then((res)=>{
            console.log(res);
        }).catch(e=> console.log(e));
        setId();
        setName('');
        setMinvalue();
        setMaxvalue();
    }
    return (
        <div>
            <MainHeading/>
            
             <div className="input_part">
                 <form>
            <input value ={id} onChange ={event=> setId(event.target.value) } placeholder ="Id" type="number"/>
            <input value={name} onChange={event => setName(event.target.value) } placeholder="Type a data" type="text"/>
            <input value={minvalue} onChange={event => setMinvalue(event.target.value) } placeholder="minvalue" type="number"/>
            <input value={maxvalue} onChange={event => setMaxvalue(event.target.value) } placeholder="maxvalue" type="number"/>
            <button onClick={feednow} type="submit" >feed data</button>
            </form>
            </div>
        </div>
    )
}

export default Otherpage
