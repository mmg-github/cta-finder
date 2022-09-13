
import { useState, useEffect } from 'react';
import './App.css';
import { Cards } from './components/Cards';
import { Logos } from './components/Logos';
import { Results } from './components/Results';
import urls from './data/urls.json'

function App() {
  const columnNames = Object.keys(urls[0])
  // ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'EnBitlyURL', 'SpBitlyURL', 'EnSocialMediaBitly', 'SpSocialMediaBitly']
  const [columnIndex, setColumnIndex] = useState(0)
  
  const [data, setData] = useState([])

  const filterData = (val) =>{
    if (val){
      setData(data.filter(item => item[columnNames[columnIndex]] === val))
      setColumnIndex(columnIndex + 1)
    }else{
      setData(urls)
      
    }
  }

  useEffect(()=>{
    filterData()
  },[])

  return (
     <div className='main'>
          <div style={{width:'100%'}}>
          <Logos />
          {
            data.length > 1 
            ? 
            <Cards 
              data = {data} 
              columnName = {columnNames[columnIndex]}
              filterData = {filterData}
            />
            :
            <Results data={data}/>

          }
          
          </div>
        
     </div>
  );
}

export default App;
