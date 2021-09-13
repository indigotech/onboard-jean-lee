import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
  width: 160px;
  margin: auto;
  line-height: 12px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

interface TextProps {
    isCurrent?: boolean;
}

export const Text = styled.h2<TextProps>`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  text-decoration: ${props => props.isCurrent ? 'underline' : 'none'};
`;

interface ArrowProps {
    makeInvisible?: boolean;
}

const Arrow = styled.div<ArrowProps>`
  position: relative;
  content: '';
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  border-right: 0.12em solid rgba(0, 0, 0, 0.87);
  border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  visibility: ${props => props.makeInvisible ? 'hidden' : 'visible'};
`;

export const LeftArrow = styled(Arrow)`
  transform: rotate(-135deg);
`;

export const RightArrow = styled(Arrow)`
  transform: rotate(45deg);
`;
