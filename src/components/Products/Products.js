import { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import { ProductsContainer, ProductsHeader, ProductsGrid } from './styles'

function Products(props) {
  const [sort] = useState('CRESCENTE')

  useEffect(() => {
    getFilteredAndOrderedList()
  })

  const getFilteredAndOrderedList = () => {
    return props.products
    .filter((product) => product.price < props.maxFilter )
    .filter((product) => product.price > props.minFilter )
    .filter((product) => product.name.includes(props.nameFilter))
    .sort((a, b) => sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
  }
    const filteredAndOrderedList = getFilteredAndOrderedList()
    
  return (
    <ProductsContainer>
      <ProductsHeader>
        <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
        <label>
          Ordenação: 
          <select value={sort}>
            <option value={'CRESCENTE'}>Crescente</option>
            <option value={'DECRESCENTE'}>Decrescente</option>
          </select>
        </label>
      </ProductsHeader>
      <ProductsGrid>
      {filteredAndOrderedList.map(product => {
        return <ProductsCard product={product}/>
      })}
      </ProductsGrid>
    </ProductsContainer>
  );
}

export default Products;
