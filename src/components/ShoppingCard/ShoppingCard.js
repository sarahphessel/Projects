import ShoppingCardItem from './ShoppingCardItem'
import {ShoppingContainer} from './styles'

function ShoppingCard(props) {
 // Função para calcular o valor total (preço vezes quantidade)
  const getTotalValue = () => {
    let totalValue = 0
    for(let product of props.productsInCard){
      totalValue += product.price * product.quantity
    }
    return totalValue
  }
  return (
    <ShoppingContainer>
      <h3>Carrinho </h3>
      {props.productsInCard.map((product) => {
        return <ShoppingCardItem cardItem={product}/>
      })}
      <p>Valor total: R${getTotalValue()},00</p>
    </ShoppingContainer>
  );
}

export default ShoppingCard;
