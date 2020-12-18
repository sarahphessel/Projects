import { FiltersContainer, InputContainer } from './styles'

function Filters(props) {

  //ESSES CODIGOS EM COMENTARIOS NÃO FUNCIONAM AINDA
  // const onChangeMinValue = (event) => {
  //   props.setMinFilter(event.target.value)
  // }
  // const onChangeMaxValue = (event) => {
  //   props.setMaxFilter(event.target.value)
  // }
  // const onChangeNameValue = (event) => {
  //   props.setNameFilter(event.target.value)
  // }

  return (
    <FiltersContainer>
      <h3>Filtros</h3>
      <InputContainer>
        Valor minimo:
          <input
          type="number"
          name="min"
          value={props.minFilter}
          // onChange={onChangeMinValue}
        />
      </InputContainer>
      <InputContainer>
        Valor maximo:
          <input
          type="number"
          name="max"
          value={props.maxFilter}
          // onChange={onChangeMaxValue}
        />
      </InputContainer>
      <InputContainer>
        Buscar por nome:
          <input
          type="text"
          name="name"
          value={props.nameFilter}
          // onChange={onChangeNameValue}
        />
      </InputContainer>
    </FiltersContainer>
  );
}

export default Filters;