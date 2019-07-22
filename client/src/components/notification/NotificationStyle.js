import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 300px;
  height: 80px;
  border-radius: 6px;
  border: 1px solid #d10322;
  background: #ee6d71;
  position: absolute;
  right: 50px;
  bottom: ${props => props.number * 100 + 50}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
