import styled from 'styled-components';

const Arrow = styled.div`
  position: relative;
  content: '';
  display: inline-block;
  width: 0.4em;
  height: 0.4em;
  border-right: 0.12em solid rgba(0, 0, 0, 0.87);
  border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  transform: rotate(-135deg) translate(-50%);
`;

export const LeftArrow = styled(Arrow)`
  transform: rotate(-135deg) 
`;

export const RightArrow = styled(Arrow)`
  transform: rotate(45deg);
`;
