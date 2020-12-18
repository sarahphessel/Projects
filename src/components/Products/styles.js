import styled from 'styled-components'

export const ProductsContainer = styled.div`
 gap: 10px;
 padding: 0 16px;
`
export const ProductsHeader = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 padding-bottom: 10px;
`
export const ProductsGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 10px;
`
export const CardContainer = styled.div`
 border: 1px solid black;
 border-radius: 7px;
 display: flex;
 flex-direction: column;
`
export const CardInfo = styled.div`
 display: flex;
 flex-direction: column;
 padding: 16px;
 p{
     margin: 4px 0;
 }
`
export const AddToCard = styled.button`
    margin: 0 30px 20px; 
`