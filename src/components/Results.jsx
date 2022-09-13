import QRcode from 'qrcode.react'

export const Results = ({data}) => {
  return (
    <>
    <div  className='container'>
        {data.map((item, index) => 
        {
          return(
           <div className="container-result" key={index}>
              {
                (item.EnBitlyURL || item.EnSocialMediaBitly) && 
                <div className='container-item'>
                  {
                    item.EnBitlyURL &&
                    <div className="card-result">
                    <div>
                      <QRcode id={item.EnBitlyURL} value={item.EnBitlyURL} />
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
                  <div className="card-result">
                    <div>
                      <QRcode id={item.EnSocialMediaBitly} value={item.EnSocialMediaBitly} />
                    </div>
                    <div>
                      <p>English Social Media Bitly URL</p>
                      <p><a href={item.EnSocialMediaBitly} target="_blank">{item.EnSocialMediaBitly}</a></p>
                    </div>
                  </div>
                  }
                </div>
              }
              {
                (item.SpBitlyURL || item.SpSocialMediaBitly) && 
                <div  className='container-item'>
                  {
                    item.SpBitlyURL &&
                    <div className="card-result">
                    <div>
                      <QRcode id={item.SpBitlyURL} value={item.SpBitlyURL} />
                    </div>
                    <div>
                      <p>Spanish Bitly URL</p>
                      <p><a href={item.SpBitlyURL} target="_blank">{item.SpBitlyURL}</a></p>
                    </div>
                  </div>
                  }
                  {
                    item.SpSocialMediaBitly &&
                  <div className="card-result">
                    <div>
                      <QRcode id={item.SpSocialMediaBitly} value={item.SpSocialMediaBitly} />
                    </div>
                    <div>
                      <p>Spanish Social Media Bitly URL</p>
                      <p><a href={item.SpSocialMediaBitly} target="_blank">{item.SpSocialMediaBitly}</a></p>
                    </div>
                  </div>
                  }
                </div>
              }
           </div>
          )
        }
        )}
    </div>
    <div style={{textAlign:'center', margin:'2rem'}}>
      <a href="/" className='btn btn-restart'>Click to get another one</a>
    </div>
    <div className='contact' style={{textAlign:'center', margin:'2rem'}}>
      <p>
        Looking for something else? </p>
      <p> Contact us on <a href='mailto:mmirzaie@MontageMarketingGroup.com' target='_blank'>Analytics@MontageMarketingGroup.com</a></p>
    </div>
    </>
  )
}
