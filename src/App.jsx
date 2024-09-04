import React from 'react'
import Card from './Components/Card'

function App() {
  return (
   <>

   <h1>OLX Card</h1>

    <Card price={'21,500'} description={'oppo a57 8gb256gb 5000mah battery 03214937603'} url={'https://images.olx.com.pk/thumbnails/482576291-800x600.webp'}/>
    <hr />

   <Card price={'29,500'} description={"Reno 2F 256 gb 8 gb Brand new PTA Approved 10/10 Pop Up Camera"} url={'https://images.olx.com.pk/thumbnails/479714138-800x600.webp'}/>
    <hr />
    
   <Card price={'270,000'} description={'iphone 14 max pro 512 GB'} url={'https://images.olx.com.pk/thumbnails/480836588-800x600.webp'}/>
   <hr />

  <Card price={'79,000'} description={'iPhone X 256 GB PTA approved'} url={'https://images.olx.com.pk/thumbnails/483071130-800x600.webp'}/>
<hr />

 <Card price={'60,000'} description={'Samsung S21 ultra,S21,S22,S23,Zflip4'} url={'https://images.olx.com.pk/thumbnails/471830752-800x600.webp'}/>
   </>
  )
}

export default App