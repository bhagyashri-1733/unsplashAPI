
import './App.css';
import axios from "axios";
import { useState } from 'react';

function App() {
  const[image,setImage]=useState([])
  const getImage = ()=>{
   axios.get("https://api.unsplash.com/search/photos?page=1&query=office&client_id=JrKfwP0CGiQpezUS4RPA1uFdZWMksD-dfbsy0UqgSSU")
    .then((response)=>{
      //console.log(response)
      setImage(response.data.results)
    })
  }
  return (
    <>
    <div>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <input className="search"
          type='text'
          placeholder='search'/>
        <button className="btn" onClick={getImage}>Get Image</button>
        </div>
      </div>
    </div>
    <div className="container1">
      <div className='row1'>
       {
        image.map((value,index)=>{
          return(
            <div key={index}className='col-41'>
              <div className="card">
                <img src={value.urls.small} alt='image'/>
              </div>
            </div>
          )
        })
       }

      </div>
    </div>
    </div>
    
    </>
  );
}

export default App;
