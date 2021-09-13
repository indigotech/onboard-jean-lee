import React from 'react';
import { LeftArrow, RightArrow, Wrapper, Text } from './styles';

interface PaginatorProps {
  onRightClick: () => void;
  onLeftClick: () => void;
  currentPage: number;
  isLastPage: boolean;
}

const Paginator = ({ onRightClick, onLeftClick, currentPage, isLastPage }: PaginatorProps): JSX.Element => {
  const isFirstPage = currentPage === 1;

  return (
    <Wrapper>
      <LeftArrow onClick={onLeftClick} makeInvisible={isFirstPage} />
      <Text>{currentPage}</Text>
      <RightArrow onClick={onRightClick} makeInvisible={isLastPage} />
    </Wrapper>
  );
};

export default Paginator;
