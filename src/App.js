import './App.css';
import {useState} from 'react'
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products';
import ShoppingCard from './components/ShoppingCard/ShoppingCard';
import styled from 'styled-components'

const AppContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 10px;
  gap: 5px;
`
const products = [
  {
    id: 1,
    photo: "https://picsum.photos/200/200",
    name: "Produto 1",
    price: 100.00,

  },
  {
    id: 2,
    photo: "https://picsum.photos/200/200",
    name: "Produto 2",
    price: 150.00,
    
  },
  {
    id: 3,
    photo: "https://picsum.photos/200/200",
    name: "Produto 3",
    price: 120.00,
    
  },
  {
    id: 4,
    photo: "https://picsum.photos/200/200",
    name: "Produto 4",
    price: 110.00,
    
  },
  {
    id: 5,
    photo: "https://picsum.photos/200/200",
    name: "Produto 5",
    price: 90.00,
    
  }
]

function App() {
  const [maxFilter, setMaxFilter] = useState(1000)
  const [minFilter, setMinFilter] = useState(100)
  const [nameFilter, setNameFilter] = useState('Produto')
  const [productsInCard, setProductsInCard] = useState([
    {
      id: 1,
      photo: "https://picsum.photos/200/200",
      name: "Produto 1",
      price: 100.00,
      quantity: 1,
  
    },
    {
      id: 2,
      photo: "https://picsum.photos/200/200",
      name: "Produto 2",
      price: 150.00,
      quantity: 2,
    },
  ])
  
  return (
    <AppContainer>
      <Filters
      maxFilter={maxFilter}
      minFilter={minFilter}
      nameFilter={nameFilter}
      // setNameFilter={setNameFilter}
      // setMaxFilter={setMaxFilter}
      // setMinFilter={setMinFilter}
      />
      <Products 
      products={products}
      maxFilter={maxFilter}
      minFilter={minFilter}
      nameFilter={nameFilter}
      />
      <ShoppingCard
      productsInCard={productsInCard}
      />
    </AppContainer>
  );
}

export default App;
