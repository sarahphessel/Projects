import {CardContainer, CardInfo, AddToCard} from './styles'

function ProductsCard(props) {
  const product = props.product
  return (
    <CardContainer>
       <img src={product.photo}/>
       <CardInfo>
       <p>{product.name}</p>
       <p>R$ {product.price} </p>
       </CardInfo>
       <AddToCard>Adicionar ao carrinho</AddToCard>
    </CardContainer>
  );
}

export default ProductsCard;
