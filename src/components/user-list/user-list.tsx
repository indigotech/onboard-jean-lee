import { ListCard } from './styles';

interface node {
  id: string;
  name: string;
  email: string;
}

interface ListProps {
  list: node[];
}

const UserList = ({ list }: ListProps): JSX.Element => {
  const listItems = list.map((user) => (
    <ListCard key={user.id}>
      <h4>{user.name}</h4>
      <h4>{user.email}</h4>
    </ListCard>
  ));

  return <dl>{listItems}</dl>;
};

export default UserList;
