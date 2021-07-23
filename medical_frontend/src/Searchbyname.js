import React from 'react'
import {useState} from 'react'
import './Searchbyname.css'
import axios from './axios.js'
import e from 'cors';
import { ThemeProvider } from '@material-ui/styles';
import Printinfo from './Printinfo';
function Searchbyname() {
    
    
    const [value,SetValue] = useState(0);
    const [data,setData] = useState({});
    const [id,setId] = useState();
    const Search = (event) =>{
        event.preventDefault();
        axios.post('/search_by_id',{
            id:id,
        }).then((res)=>{
           setData(res.data[0]);
        }).catch(e=>console.log(e) );
     }
     
    console.log(data);

    

    return (

        <div className="apnaform">
            <form>
            <input value ={id} onChange ={event=> setId(event.target.value) } placeholder ="Id" type="number"/> 
            <input value = {id} onChange = {event => setValue(event.target.value)} placeholder = "Value" type= "number"/>
            <button  onClick={Search} type="submit" >  Find </button>
            </form>
            <div className="data">
            <h1> Name -- <span>{data.name}</span></h1>
            <h1> Min Value -- <span>{data.minvalue}</span></h1>
            <h1> Max Value -- <span>{data.maxvalue}</span></h1>
            </div>
             
        </div>

        

    )

}

export default Searchbyname
