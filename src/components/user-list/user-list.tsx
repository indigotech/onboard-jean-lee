import React from 'react';
import { ListCard, Wrapper } from './styles';

const mockList = {
  users: {
    count: 233,
    nodes: [
      {
        id: '1',
        name: 'Yango Reis',
        phone: '+55 (12) 3284-2465',
        birthDate: '1968-09-27',
        email: 'Yango16@hotmail.com',
        role: 'user',
      },
      {
        id: '2',
        name: 'Ladislau Pereira',
        phone: '+55 (55) 3064-0069',
        birthDate: '2015-12-19',
        email: 'Dalila1@live.com',
        role: 'user',
      },
      {
        id: '3',
        name: 'Sr. Breno Oliveira',
        phone: '(86) 46489-7546',
        birthDate: '2017-07-16',
        email: 'Slvia_Carvalho@gmail.com',
        role: 'user',
      },
      {
        id: '4',
        name: 'Mércia Carvalho',
        phone: '(33) 81356-5197',
        birthDate: '1995-02-19',
        email: 'Sulen.Batista60@yahoo.com',
        role: 'user',
      },
      {
        id: '5',
        name: 'Mércia Braga Neto',
        phone: '+55 (51) 4950-7899',
        birthDate: '1979-04-28',
        email: 'Pedro_Braga@gmail.com',
        role: 'user',
      },
      {
        id: '6',
        name: 'Dr. Bruna Moraes',
        phone: '+55 (12) 8872-4365',
        birthDate: '2017-07-16',
        email: 'Ricardo.Pereira@yahoo.com',
        role: 'user',
      },
      {
        id: '7',
        name: 'Víctor Moraes',
        phone: '(75) 7145-6708',
        birthDate: '2019-03-26',
        email: 'Pablo96@live.com',
        role: 'user',
      },
      {
        id: '8',
        name: 'César Moreira',
        phone: '+55 (70) 9459-4728',
        birthDate: '2016-05-08',
        email: 'Alexandre_Albuquerque65@hotmail.com',
        role: 'user',
      },
      {
        id: '9',
        name: 'Ígor Saraiva',
        phone: '(12) 16861-6194',
        birthDate: '1973-09-23',
        email: 'Joo96@live.com',
        role: 'user',
      },
      {
        id: '10',
        name: 'Sirineu Costa',
        phone: '(76) 7134-4450',
        birthDate: '1996-09-26',
        email: 'Marcos.Moreira@hotmail.com',
        role: 'user',
      },
    ],
  },
};

const List: React.FC = () => {
  const listItems = mockList.users.nodes.map((user) => (
    <ListCard key={user.id}>
      <h4>{user.name}</h4>
      <h4>{user.email}</h4>
    </ListCard>
  ));

  return <dl>{listItems}</dl>;
};

const UserList: React.FC = () => {
  return (
    <Wrapper>
      <h1>Lista de usuários</h1>
      <List />
    </Wrapper>
  );
};

export default UserList;
