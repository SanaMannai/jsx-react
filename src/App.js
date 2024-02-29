import Card from 'react-bootstrap/Card';

import Name from './components/Name';
import Image from './components/Image';
import Description from './components/Description';
import Price from './components/Price';
import "./App.css";




const App =()=>{
  let username ="iphone"
  return(
    
    <div style={{display:"flex", justifyContent:"space-around", marginTop:"50px"}}>

      <Card style={{ width: '18rem' }}>
     
      <Image/>

      <Card.Body>
        <Card.Title>
        <Name/>
        </Card.Title>
       
        <Card.Text>
          <Description/>
        </Card.Text>

      </Card.Body>
      <Price/>
    </Card>
    <div>
    <h1 style={{justifyContent:"center"}}>{(username)? `this product ${username}` : "this product , not exist"}</h1>
    {username && <img style={{height:"350px",}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmPSyeBQuqx_FQnRgI557q-tMeGGYXJaR5A&usqp=CAU" alt=''/> }
    </div>
    </div>
  )
}

export default App
