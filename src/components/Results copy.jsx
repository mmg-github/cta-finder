import QRcode from 'qrcode.react'

export const Results = ({data}) => {
  return (
    <>
    <div  className='container'>
        {data.map((item, index) => 
        {
          return(
            <div className='container-result' key={index}>
              {
              /* if there is  EnBitlyURL or EnSocialMediaBitly then show result card*/
              (item.EnBitlyURL || item.EnSocialMediaBitly) &&
              <div className='card-result'>
                  <h2 style={{fontWeight:'bold', color:'#262262'}}>English Version</h2>
                  {
                    item.EnBitlyURL && <div style={{margin:'1rem'}}><QRcode  id={index} value={item.EnBitlyURL} /></div>
                  }
                  {
                    item.EnBitlyURL && <span>English Bitly URL: <a href={item.EnBitlyURL} target="_blank">{item.EnBitlyURL}</a></span>
                  }
                  {
                    item.EnSocialMediaBitly && <span>English Social Media URL: <a href={item.EnSocialMediaBitly} target="_blank">{item.EnSocialMediaBitly}</a></span>
                  }
              </div>
              }
              {
              /* if there is  SpBitlyURL or EnSocialMediaBitly then show result card*/
              (item.SpBitlyURL || item.EnSocialMediaBitly) &&
              <div className='card-result'>
                  <h2 style={{fontWeight:'bold', color:'#262262'}}>Spanish Version</h2>
                  {
                    item.SpBitlyURL && <div  style={{margin:'1rem'}}><QRcode id={index} value={item.SpBitlyURL} /></div>
                  }
                  {
                    item.SpBitlyURL && <span>English Bitly URL: <a href={item.SpBitlyURL} target="_blank">{item.SpBitlyURL}</a></span>
                  }
                  {
                    item.EnSocialMediaBitly && <span>English Social Media URL: <a href={item.EnSocialMediaBitly} target="_blank">{item.EnSocialMediaBitly}</a></span>
                  }
              </div>
              }
            </div>
          )
        }
        )}
    </div>
    <div style={{textAlign:'center'}}>
        <a href="/"className='btn' style={{ backgroundColor:'#dc3545', border:'none', margin:'1rem', color:'#fff', textDecoration:'none'}}>Restart</a>
    </div>
    </>
  )
}
