import React from 'react';
import { LeftArrow, RightArrow } from './styles';

interface PaginatorProps {
    onRightClick: () => void
    onLeftClick: () => void
    currentPage: number
}

const Paginator = ({ onRightClick, onLeftClick, currentPage }: PaginatorProps): JSX.Element => {
    return <div><LeftArrow onClick={onLeftClick} />{currentPage}<RightArrow onClick={onRightClick}/></div>;
};

export default Paginator;