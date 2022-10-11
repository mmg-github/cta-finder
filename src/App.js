
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

  const questions = [
    "Who are you looking to engage?",
    "Are you targeting a specific market?",
    "Please select the target market where your activity will take place.", 
    "Please select your organization",
    "Please select your organization"]

    const [researcher, setResearcher] = useState("")
    const [language,setLanguage] = useState(true)
    // if data filtered and there is only one row but still Card component need to show: (Participant > Yes > Wisconsin)
    const [targetMarket,setTargetMarket] = useState(false)
    const [showResultHeading, setShowResultHeading] =useState(true)

    

  
  const [data, setData] = useState([])

  const filterData = (val) =>{
    console.log("Column Name: ",columnNames[columnIndex])
    if (val){

      if (val === "Researcher"){
        setResearcher("What is the goal of your researcher engagement activity?") 
        setLanguage(false)
        setShowResultHeading(false)
      }if (val === "No") {
        setResearcher("Do you want a partner-specific URL?") 
      } 

     
      setData(data.filter(item => item[columnNames[columnIndex]] === val))
      setColumnIndex(columnIndex + 1)
      //console.log("Researcher's Value: ",researcher)
       //(columnNames[columnIndex].toString() === "Yes" && val === "third") && setTargetMarket(true)

       // if data filtered and there is only one row but still Card component need to show: (Participant > Yes > Wisconsin)
       val === "Wisconsin" ? setTargetMarket(true) : setTargetMarket(false)
       if(columnNames[columnIndex].toString() === "third" && val==="No") setShowResultHeading(false)
      
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
            data.length > 1 || targetMarket
            ? 
            <Cards 
              data = {data} 
              columnName = {columnNames[columnIndex]}
              filterData = {filterData}
              question = {researcher === "" ? questions[columnIndex] : researcher}
              targetMarket = {targetMarket}
            />
            :
            <Results 
            data={data} 
            lang={researcher != "" ? false : true} 
            language={language}
            showResultHeading={showResultHeading}
            />

          }
         
          </div>
     </div>
  );
}

export default App;
