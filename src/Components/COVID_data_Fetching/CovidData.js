import React from 'react'
import { useEffect, useState } from 'react';
import './CovidData.css'

function CovidData() {
  const [data, setdata] = useState([]);
  
  const getcovidedata = async () =>{
    try{
      const res = await fetch("https://data.covid19india.org/data.json")
      const actualdata = await res.json();
      console.log(actualdata.statewise[0]);
      setdata(actualdata.statewise[0])
    }catch(err){
      console.log(err)
    }
  };
  useEffect(() => {
    getcovidedata();
  }, []);

  return (
    <div>      
      <section>
        <h2>🔴 Live</h2>
        <h2>covid 19 corona virus tracker</h2>
        <div className='grid'>
          <div className='card'>
            <p><span>OUR</span>COUNYTRY</p>
            <h1>INDIA</h1>
          </div>

          <div className='card'>
            <p><span>TOTAL</span>RECOVERED</p>
            <h1>{data.recovered}</h1>
          </div>  

          <div className='card'>
            <p><span>TOTAL</span>CONFIRMED</p>
            <h1>{data.confirmed}</h1>
          </div> 

          <div className='card'>
            <p><span>TOTAL</span>DEATH</p>
            <h1>{data.deaths}</h1>
          </div>

          <div className='card'>
            <p><span>TOTAL</span>ACTIVE</p>
            <h1>{data.active}</h1>
          </div>

          <div className='card'>
            <p><span>LAST</span>UPDATE</p>
            <h1>{data.lastupdatedtime}</h1>
          </div> 
        </div>
      </section>
    </div>
  )
}

export default CovidData
