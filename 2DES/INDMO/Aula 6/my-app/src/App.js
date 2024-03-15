import React, {useState} from 'react';
import {Navbar, Nav, Conteiner, Card, Button, Badge} from 'react-bootstrap';
import "bootstrap/dits/css/bootstrap.min.css";
import './App.css';

function ProductCard ({ name, addtoCard}) {
    return (
        <div className="col-md-4">
            <Card>
                <Card.Img variant="top" src={` /${name.toLowerCase()}.jpg`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Text>
                    Descrição do produto {name}, um otimo produto para você comprar.
                </Card.Text>
                <button variant="primary" onClick={() => addtoCard{name}} />
                    Adicionar ao carrinho
                </button> 
                </Card.Body>
            </Card>
      </div>
    );
}
function CartPage ( cartItems, removeFromCart) {
    return (
        <Conteiner className="mt-5">
            <h1 classNome="text-center mb-4">Carrinho de compras</h1>
            {cartItems.map((item, index) => {
                <div key={index} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Button variant="danger" onClink{() => removeFromCart(index)}>
                            Remover do carrinho
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            })}
        </Conteiner>
    );
}
function App() {
    const [cartItems, setCartItems] = useState([]);
}
const addtoCard = (productName) => {
    const newItem = { nome: produtcName};
    setcartItems([...cartItens, newItem]);
};
const removeFromCart = (index) => {
  updateCartItems.sploce(index, 1);
  setCartItems(updateCartItems);
};
return (
    <div>
    <Navbar bg="dark" variant="dark">
        <conteiner>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </conteiner>
    </Navbar>
    </div>
)
