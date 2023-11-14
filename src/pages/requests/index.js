import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import pedidos from '../../assets/pedido.png'
import trash from '../../assets/bin.svg'

import {
  Container,
  Itens,
  H1,
  Img,
  Button,
  Order
} from './styles';

//JSX
function Orders() {
  const [orders, setOrder] = useState([])

  const navigate = useNavigate()

  function goBackPage(){
    navigate("/")
  }

  useEffect(() => {
      async function fetchOrders(){
        const {data: newOrders} = await axios.get("http://localhost:3001/orders")
      setOrder(newOrders)
      }
      fetchOrders()
  }, [])

  async function deleteOrder (orderId) {
      await axios.delete(`http://localhost:3001/orders/${orderId}`)
      const newOrder = orders.filter(order => order.id !== orderId)
      setOrder(newOrder)
  }

  return (
    <Container>
        <Img alt="logo-img" src={pedidos} />
        <Itens IsBlur={true}>
          <H1>Pedidos</H1>
          
          <ul>
            {orders.map((order) => (
              <Order key={orders.id}>

              <p> {orders.name}</p><p>{orders.age}</p>

              <button onClick={() => deleteOrder(orders.id)} > 
                <img alt="trashbin" src={trash} /> 
              </button>

              </Order>
            ))}
          </ul>

          <Button reverseArrow={true} onClick={goBackPage} > 
            Voltar        
          </Button>

        </Itens>
    </Container>
    );
}

export default Orders