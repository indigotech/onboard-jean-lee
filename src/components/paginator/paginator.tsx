import React from 'react';
import { LeftArrow, RightArrow, Wrapper, Text, TextWrapper } from './styles';

interface PaginatorProps {
  onRightClick: () => void;
  onLeftClick: () => void;
  currentPage: number;
  lastPage: number;
  isLastPage: boolean;
}

const Paginator = ({ onRightClick, onLeftClick, currentPage, lastPage, isLastPage }: PaginatorProps): JSX.Element => {
  const isFirstPage = currentPage === 1;

  return (
    <Wrapper>
      <LeftArrow onClick={onLeftClick} makeInvisible={isFirstPage} />
      <TextWrapper>
        <Text isCurrent={true}>{currentPage + ' '}</Text>
        <Text>&nbsp;de {lastPage}</Text>
      </TextWrapper>
      <RightArrow onClick={onRightClick} makeInvisible={isLastPage} />
    </Wrapper>
  );
};

export default Paginator;
