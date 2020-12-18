import ProductsCard from './ProductsCard'
import { ProductsContainer, ProductsHeader, ProductsGrid } from './styles'

function Products(props) {
  return (
    <ProductsContainer>
      <ProductsHeader>
        <p>Quantidade de produtos: 5</p>
        <label>
          Ordenação: 
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </label>
      </ProductsHeader>
      <ProductsGrid>
      {props.products.map(product => {
        return <ProductsCard product={product}/>
      })}
      </ProductsGrid>
    </ProductsContainer>
  );
}

export default Products;
