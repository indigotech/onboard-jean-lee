import styled from 'styled-components';

export const ListCard = styled.li`
  width: 90%;
  background-color: white;
  border: 1px solid grey;  
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  border-radius: 24px;
  list-style-type: none;
`;

export const UserListWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`

export const RoundButton = styled.button`
  background-color: #04aa6d;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin: 4px 2px;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  position: absolute;
  right: 0;
  bottom: 0;
`;