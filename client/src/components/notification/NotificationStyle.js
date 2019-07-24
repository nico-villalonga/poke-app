import styled from 'styled-components'

const colors = {
  success: { border: '#007b2c', background: '#6ac682' },
  info: { border: '#2284c4', background: '#93c6e4' },
  warning: { border: '#ffa900', background: '#ffcd47' },
  error: { border: '#d10322', background: '#ee6d71' },
}

const getNotificationColor = type => {
  const { border, background } = colors[type];

  return `
    border: 1px solid ${ border };
    background: ${ background };
  `;
};

export const Wrapper = styled.div`
  width: 300px;
  height: 80px;
  border-radius: 6px;
  ${ ({ type }) => getNotificationColor(type) }
  position: fixed;
  right: 50px;
  bottom: ${props => props.number * 100 + 50}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
