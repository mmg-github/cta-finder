import React from 'react'
import { motion } from 'framer-motion'

export const Cards = ({data, columnName, filterData}) => {

    // get all values of a column:['Participant', 'Participant','Researcher' ,'Researcher']
    const values = data.map(item => item[columnName])
    // get uniques values: ['Participant', 'Researcher']
    const distinctvalues = values.filter((value, index) => values.indexOf(value) === index)
    

  return (
    <>
        <div style={{textAlign:'center', color:'#262262'}}>
            <h2 style={{fontWeight:'400'}}>Please Choose one</h2>
        </div>
        <div className="container">
        {
            distinctvalues.map((item, index) => 
                <p 
                    className='btn' 
                    key={index} 
                    onClick={()=>filterData(item)}
                >{item}</p>
            )
        }
    </div>
    </>
    
  )
}
