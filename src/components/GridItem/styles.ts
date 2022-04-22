import styled from 'styled-components'

type ContainerProps = {
  showBackground: boolean,
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${props => props.showBackground === true 
  ? '#7A21D2' 
  : '#BF91EE'};
  padding:10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`
type IconProps = {
  opacity?: number,
}

export const Icon = styled.img<IconProps>`
opacity:{prop => prop.opacity ?? 1}
max-width: 100%;
height: auto;
`