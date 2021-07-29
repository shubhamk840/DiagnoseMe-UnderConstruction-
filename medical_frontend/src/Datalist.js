import React from 'react'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import axios from './axios.js'
import {useState,useEffect} from 'react'
import MainHeading from './MainHeading.js';
import './Datalist.css'
import './Table.css'

function Datalist() {

    const [data,Setdata] = useState([]);
    useEffect (() =>
    {
     axios.get('/viewlist').then((res)=>{
            Setdata(res.data);
     }).catch((err)=>{
         console.log(err);
     })
    },[]
    );

   console.log(data);
    return (
        <div>

            <MainHeading/>
            
            <div className="table"> 
            <tr className="table_heading">
            
            <th  class="row-1 row-ID">Chemical Name</th>
            <th class="row-2 row-name">Id's</th>
            <th class="row-3 row-job">Minvalue</th>
            <th class="row-4 row-email">Maxvalue</th>
            </tr>
           {data.map(({id,name,minvalue,maxvalue}) =>(
               <tr>
                   <td align="left"><strong>{name}</strong></td>
                   <td align="left">{id}</td>
                   <td align="left">{minvalue}</td>
                   <td align="left">{maxvalue}</td>
               </tr>
               
           ))}
       </div>
        </div>
    )
}

export default Datalist


