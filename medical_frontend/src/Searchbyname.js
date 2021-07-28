import React from 'react'
import {useState} from 'react'
import './Searchbyname.css'
import axios from './axios.js'
import e from 'cors';
import { ThemeProvider } from '@material-ui/styles';
import Printinfo from './Printinfo';
import MainHeading from './MainHeading';
function Searchbyname() {
    
    const [flag,setFlag] = useState(0);
    const [value,setValue] = useState(0);
    const [data,setData] = useState({});
    const [id,setId] = useState();
    const Search = (event) =>{
        event.preventDefault();
        axios.post('/search_by_id',{
            id:id,
        }).then((res)=>{
           setData(res.data[0]);
        }).catch(e=>console.log(e) );
        setFlag(1);
     }
  
      function Checkout(){
          if(flag==0) return null;
          
          if(value>data.minvalue && value<=data.maxvalue){
              return (
                  <div>
                <div className="data">
                <h1> Name -- <span>{data.name}</span></h1>
                <h1> Min Value -- <span>{data.minvalue}</span></h1>
                <h1> Max Value -- <span>{data.maxvalue}</span></h1>
                </div>

                  <div>
                  <h1> You are currectly fine my friend</h1>
                  </div>
                  </div>
                 
              )
          }
          else{
              return (
                  <div>
                <div className="data">
                <h1> Name -- <span>{data.name}</span></h1>
                <h1> Min Value -- <span>{data.minvalue}</span></h1>
                <h1> Max Value -- <span>{data.maxvalue}</span></h1>
                </div>

                  <div>
                      <h1> Your not okay dude</h1>
                  </div>
                  </div>
              )
          }
      }
    return(

        <div className="apnaform">

            <MainHeading/>
            <br></br>
            <a href="/datalist" target="_blank">CLICK HERE TO CHECKOUT THE LIST FOR IDs</a> 


            <form>
            <h5> Enter the Id and Value from your report </h5>
            <input value ={id} onChange ={event=> setId(event.target.value) } placeholder ="Id" type="number"/> 
            <input value = {value} onChange = {event => setValue(event.target.value)} placeholder = "Value" type= "number"/>
            <button  onClick={Search} type="submit" >  Find </button>
            </form>
         
             
             <div>
                 <Checkout/>
             </div>
        </div>

        

    )

}

export default Searchbyname
