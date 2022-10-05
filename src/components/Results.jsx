import QRcode from 'qrcode.react'
import { useState } from 'react'

export const Results = ({data, lang, language,showResultHeading}) => {
  const [show, setShow] = useState(null)

  return (
    <>
    {
      (show === null && language) &&
      <div style={{textAlign:'center', color:'#262262'}}>
        <h2 style={{fontWeight:'400'}}>Please choose a language</h2>
      </div>
    }
    
    <div  className='container'>
      {
        (show === null && language)
          ? 
          <>
            <p className="btn" onClick={()=>setShow("English")}>English</p>
            <p className="btn" onClick={()=>setShow("Spanish")}>Spanish</p>
          </> 
          : 
          data.map((item, index)=>{
            return(
              <div className="container-result" key={index}>
                {
                  // show === "English" 
                  show === "English" || !language
                  ?
                    (item.EnBitlyURL || item.EnSocialMediaBitly) && 
                    <div className='container-item'>
                      {
                        showResultHeading && <h3>Organization-specific Info</h3>
                      }
                      
                      {
                        item.EnBitlyURL &&
                        <div className="card-result flex-container">
                        <div>
                          <QRcode id={item.EnBitlyURL} value={item.EnBitlyURL+"?r=qr"} fgColor={"#1d1d1e"}/>
                        </div>
                        <div>
                          <p>English Bitly URL</p>
                          <p><a href={item.EnBitlyURL} target="_blank">{item.EnBitlyURL}</a></p>
                          <br/>
                          {item.EnVanityURL && 
                            <>
                              <p>English Vanity URL</p>
                              <p><a href={item.EnVanityURL} target="_blank">{item.EnVanityURL}</a></p>
                            </>
                          }
                        </div>
                      </div>
                      }
                      {
                        item.EnSocialMediaBitly &&
                      <div className="card-result flex-container">
                        <div>
                          <QRcode id={item.EnSocialMediaBitly} value={item.EnSocialMediaBitly+"?r=qr"} fgColor={"#1d1d1e"}/>
                        </div>
                        <div>
                          <p>English Social Media Bitly URL</p>
                          <p><a href={item.EnSocialMediaBitly} target="_blank">{item.EnSocialMediaBitly}</a></p>
                        </div>
                      </div>
                      }
                    </div>
                  
                  :
                    (item.SpBitlyURL || item.SpSocialMediaBitly) && 
                    <div  className='container-item'>
                      {
                        item.SpBitlyURL &&
                        <div className="card-result flex-container">
                        <div>
                          <QRcode id={item.SpBitlyURL} value={item.SpBitlyURL+"?r=qr"}  fgColor={"#1d1d1e"}/>
                        </div>
                        <div>
                          <p>Spanish Bitly URL</p>
                          <p><a href={item.SpBitlyURL} target="_blank">{item.SpBitlyURL}</a></p>
                        </div>
                      </div>
                      }
                      {
                        item.SpSocialMediaBitly &&
                      <div className="card-result flex-container">
                        <div>
                          <QRcode id={item.SpSocialMediaBitly} value={item.SpSocialMediaBitly+"?r=qr"} fgColor={"#1d1d1e"}/>
                        </div>
                        <div>
                          <p>Spanish Social Media Bitly URL</p>
                          <p><a href={item.SpSocialMediaBitly} target="_blank">{item.SpSocialMediaBitly}</a></p>
                        </div>
                      </div>
                      }
                  </div>
                }
                {
                  (item.MarketwideVanityURL || item.MarketwideBitlyURL || item.SpanishMarketwideVanityURL || item.SpanishMarketwideBitlyURL) && 
                  <div className="container-item">
                      <h3>Marketwide Info</h3>
                    <div className="card-result card-result-second">
                      {
                        item.MarketwideBitlyURL &&
                        <div className='flex-container'>
                          <div>
                            <QRcode id={item.MarketwideVanityURL} value={item.MarketwideBitlyURL+"?r=qr"} bgColor={"#EEEEF1"} fgColor={"#1d1d1e"}/>
                          </div>
                          <div>
                            <div  style={{marginBottom:'1rem'}}>
                              <p>Market-wide Bitly URL</p>
                              <p><a href={item.MarketwideBitlyURL} target="_blank">{item.MarketwideBitlyURL}</a></p>
                            </div>
                            <div>
                              <p>Market-wide Vanity URL</p>
                              <p><a href={item.MarketwideVanityURL} target="_blank">{item.MarketwideVanityURL}</a></p>
                            </div>
                          </div>
                        </div>
                      }
                      {
                        item.SpanishMarketwideBitlyURL &&
                        <div className='flex-container'>
                        <div></div>
                          <div>
                            <QRcode id={item.SpanishMarketwideVanityURL} value={item.SpanishMarketwideBitlyURL+"?r=qr"} bgColor={"#EEEEF1"} fgColor={"#1d1d1e"}/>
                          </div>
                          <div>
                            <div  style={{marginBottom:'1rem'}}>
                              <p>Market-wide Bitly URL (Spanish)</p>
                              <p><a href={item.SpanishMarketwideBitlyURL} target="_blank">{item.SpanishMarketwideBitlyURL}</a></p>
                            </div>
                            <div>
                              <p>Market-wide Vanity URL (Spanish)</p>
                              <p><a href={item.SpanishMarketwideVanityURL} target="_blank">{item.SpanishMarketwideVanityURL}</a></p>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                }
              </div>
             )
                  
          })
      }
    </div>
    {
      (show != null || !language) &&
      <>
        <div style={{textAlign:'center', margin:'2rem'}}>
          <a href="/" className='btn btn-restart'>Click to start over</a>
        </div>
        <div className='contact' style={{textAlign:'center', margin:'2rem'}}>
          <p style={{color:'#1d1d1e'}}>
          Unable to find the URL you need? Contact us:</p>
          <p> <a href='mailto:Analytics@MontageMarketingGroup.com' target='_blank'>Analytics@MontageMarketingGroup.com</a></p>
        </div>
      </>
    }
    
    </>
  )
}
