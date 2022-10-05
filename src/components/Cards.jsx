import React from 'react'

export const Cards = ({data, columnName, filterData, question,targetMarket}) => {

    // get all values of a column:['Participant', 'Participant','Researcher' ,'Researcher']
    const values = data.map(item => item[columnName])
    // get uniques values: ['Participant', 'Researcher']
    const distinctvalues = values.filter((value, index) => values.indexOf(value) === index)
    
    // if there is Yes and No option then sort like first Yes then No
    if(distinctvalues[0] === 'No') {
        distinctvalues.reverse()
    }else{
        distinctvalues.sort()
    } 


    
  return (
    <>
        <div style={{textAlign:'center', color:'#262262'}}>
            <h2 style={{fontWeight:'400'}}>{question}</h2>
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
