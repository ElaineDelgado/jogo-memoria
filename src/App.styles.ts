import styled from 'styled-components'

export const Wrapper = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Header = styled.header`
  text-align: center; 
  padding: 40px 0; 
  & h1 {
    display: none;
  }
`

export const Container = styled.main`
  width: 100%;
  max-width:750px;
  margin: 0 auto;
  display: flex;
  padding: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Info =styled.section`
  display:flex;
  flex:1;
  flex-direction: column;
  align-items: flex-start;
  width: auto; 

  & p {
    margin: 0;
  }
  
  @media(max-width: 768px) {
    align-items: center;
  }
`

export const LogoLink =styled.a`
display: block;
`

export const InfoArea =styled.section`
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`

export const GridArea =styled.main`
flex: 1;
display: flex;
justify-content: flex-end; 
background-color: #fff;

@media(max-width: 768px) {
  justify-content: center;
  margin: 0 20px;
}
`

export const Grid= styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`
