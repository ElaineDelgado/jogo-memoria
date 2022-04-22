import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;

  @media(max-width: 768px) {
    align-items: center;
  }
`

export const Label = styled.h2`
  margin-right: 10px;
  font-size: 1.1rem;
  color: #6a7d8b;
  font-weight: bold;
`

export const Value = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #6600cc;
`