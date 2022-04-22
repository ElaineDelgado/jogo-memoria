import styled from 'styled-components' 

export const Container = styled.button`
  background-color: 	 #6600cc;
  border: 2px solid 	 #6600cc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #FFF;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  transition: .3s;
  &:hover {
    opacity: .8;
  }

  @media(max-width: 768px) {
    margin-bottom: 30px;
  }
`

export const IconArea =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid white;
    padding: 6px;
}
`

export const Icon = styled.img`
  width:14px;
  height: 14px;
` 

export const Label =styled.div`
`