import React from 'react'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import axios from './axios.js'
import {useState,useEffect} from 'react'
import MainHeading from './MainHeading.js';
import './Datalist.css'

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
            
            <div className ="datalist">
            {data.map((item)=>{
                return (
                <li> id--- {item.id} disease---- {item.name} </li>
                )
            })}

            </div>
        </div>
    )
}

export default Datalist
