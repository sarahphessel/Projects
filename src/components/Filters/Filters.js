import {FiltersContainer, InputContainer} from './styles'

function Filters(props) {
  
    return (
      <FiltersContainer>
        <h3>Filtros</h3>
        <InputContainer>
          Valor minimo: 
          <input 
          type="number"
          value={props.minFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor maximo: 
          <input 
          type="number"
          value={props.maxFilter}
          />
        </InputContainer>
        <InputContainer>
           Buscar por nome: 
          <input 
          type="text"
          value={props.nameFilter}
          />
        </InputContainer>
      </FiltersContainer>
    );
  }
  
  export default Filters;