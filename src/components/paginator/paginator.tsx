import React from 'react';
import { LeftArrow, RightArrow, Wrapper, Text, TextWrapper } from './styles';

interface PaginatorProps {
  onRightClick: () => void;
  onLeftClick: () => void;
  currentPage: number;
  lastPage: number;
}

const Paginator: React.FC<PaginatorProps> = ({ onRightClick, onLeftClick, currentPage, lastPage }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  return (
    <Wrapper>
      <LeftArrow onClick={onLeftClick} invisible={isFirstPage} />
      <TextWrapper>
        <Text isCurrent={true}>{currentPage + ' '}</Text>
        <Text>&nbsp;de {lastPage}</Text>
      </TextWrapper>
      <RightArrow onClick={onRightClick} invisible={isLastPage} />
    </Wrapper>
  );
};

export default Paginator;
