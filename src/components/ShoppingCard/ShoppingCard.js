import ShoppingCardItem from './ShoppingCardItem'
import {ShoppingContainer} from './styles'

function ShoppingCard() {
  return (
    <ShoppingContainer>
      <h3>Carrinho </h3>
      <ShoppingCardItem/>
      <ShoppingCardItem/>
      <ShoppingCardItem/>
      <p>Valor total: R$300,00</p>
    </ShoppingContainer>
  );
}

export default ShoppingCard;
