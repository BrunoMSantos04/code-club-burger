import React, {useState, useRef} from "react";
 import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

import orderImg from '../../assets/request.png'
import trash from '../../assets/bin.png'

import {
    Container,
    Itens,
    H1,
    Img,
    Button
  } from './styles';

function App(){
    const [orders, setPedido] = useState([])    
    const navigate = useNavigate()

    function goBackPage(){
        navigate("/")
      }

    

    return(
        <Container>
            <Img alt="logo" src={orderImg} />
            <Itens>
            <H1>Pedidos</H1> 
                <ul>
                {orders.map((user) => (
                <User key={user.id}>

                <p> {user.name}</p><p>{user.age}</p>

                <button onClick={() => deleteUser(user.id)} > 
                    <img alt="trashbin" src={trash} /> 
                </button>

                </User>
                ))}
            </ul>

          <Button reverseArrow={true} onClick={goBackPage} > 
            Voltar        
          </Button>
            </Itens>
        </Container>
    );
}

export default App