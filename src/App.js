import Card from 'react-bootstrap/Card';

import Name from './components/Name';
import Image from './components/Image';
import Description from './components/Description';
import Price from './components/Price';




const App =()=>{
  let username ="iphone"
  return(
    
    <div>
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
    <h1>{(username)? `this product ${username}` : "this product , not exist"}</h1>
    {username && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmPSyeBQuqx_FQnRgI557q-tMeGGYXJaR5A&usqp=CAU" alt=''/> }
    </div>
  )
}

export default App
