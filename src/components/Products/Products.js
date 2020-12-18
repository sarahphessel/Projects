import { useEffect } from 'react'
import ProductsCard from './ProductsCard'
import { ProductsContainer, ProductsHeader, ProductsGrid } from './styles'

function Products(props) {

  useEffect(() => {
    getFilteredAndOrderedList()
  })

  const getFilteredAndOrderedList = () => {
    return props.products
    .filter((product) => product.price < props.maxFilter )
    .filter((product) => product.price > props.minFilter )
    .filter((product) => product.name.includes(props.nameFilter))
  }
    const filteredAndOrderedList = getFilteredAndOrderedList()
    
  return (
    <ProductsContainer>
      <ProductsHeader>
        <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
        <label>
          Ordenação: 
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
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
