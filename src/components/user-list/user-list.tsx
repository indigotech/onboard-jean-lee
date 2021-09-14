import { ListCard } from './styles';

interface node {
  id: string;
  name: string;
  email: string;
}

interface ListProps {
  list: node[];
  onClick: (id: string) => void;
}

const UserList: React.FC<ListProps> = ({ list, onClick }) => {
  const listItems = list.map((user) => (
    <ListCard key={user.id} onClick={() => onClick(user.id)}>
      <h4>{user.name}</h4>
      <h4>{user.email}</h4>
    </ListCard>
  ));

  return <dl>{listItems}</dl>;
};

export default UserList;
