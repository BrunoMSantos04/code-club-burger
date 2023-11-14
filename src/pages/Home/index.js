import React, {useState, useRef} from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import logoCode from '../../assets/logo3.png'

import {
    Container,
    Itens,
    H1,
    Img,
    LabelInput,
    Input,
    Button
  } from './styles';

function App(){
    const [order, setPedido] = useState([])    
    const inputPedido = useRef()
    const inputNome = useRef()
    const navigate = useNavigate()

    async function addNewOrder() {
        const {data: newOrder} = await axios.post("http://localhost:3001/orders", 
            {
              pedido: inputPedido.current.value, 
              name: inputNome.current.value
            });
    
            console.log(newOrder)
        setPedido([...order, newOrder]) 
    
       navigate("/pedidos") 
    }

    return(
        <Container>
            <Img alt="logo" src={logoCode} />
            <Itens>
                <H1>Faça seu pedido!</H1>

                <LabelInput>Pedido</LabelInput>
                <Input ref={inputPedido} placeholder="Ex: 1 x-bacon, 1 guarana"/>

                <LabelInput>Nome do Cliente</LabelInput>
                <Input ref={inputNome} placeholder="Ex: Gabriel Olegario"/>

                <Button to="/pedidos" onClick={addNewOrder}>
                    Fazer Pedido 
                </Button>
            </Itens>
        </Container>
    );
}

export default App