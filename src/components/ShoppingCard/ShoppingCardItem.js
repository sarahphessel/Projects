import {CardContainer} from './styles'

function ShoppingCardItem(props) {
  const cardItem = props.cardItem
  return (
    <CardContainer>
      <p>{cardItem.quantity}x</p>
      <p>{cardItem.name}</p>
      <button>Remover</button>
    </CardContainer>
  );
}

export default ShoppingCardItem;
