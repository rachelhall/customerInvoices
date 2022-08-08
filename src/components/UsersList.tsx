import { IUser } from "../interfaces/IUser";

interface IProps {
  users: IUser[];
}
export const UsersList: React.FC<IProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <p>
          <span style={{ fontWeight: "bold" }}>Name:</span> {user.name}
        </p>
      ))}
    </div>
  );
};
