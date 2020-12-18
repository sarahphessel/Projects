import { FiltersContainer, InputContainer } from './styles'

function Filters(props) {
  return (
    <FiltersContainer>
      <h3>Filtros</h3>
      <InputContainer>
        Valor minimo:
          <input
          type="number"
          name="min"
          value={props.minFilter}
          onChange={props.onChangeMinValue}
        />
      </InputContainer>
      <InputContainer>
        Valor maximo:
          <input
          type="number"
          name="max"
          value={props.maxFilter}
          onChange={props.onChangeMaxValue}
        />
      </InputContainer>
      <InputContainer>
        Buscar por nome:
          <input
          type="text"
          name="name"
          value={props.nameFilter}
          onChange={props.onChangeNameValue}
        />
      </InputContainer>
    </FiltersContainer>
  );
}

export default Filters;