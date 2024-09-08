import { GetAllUserDocument } from "@/generated/graphql";
import { useQuery } from "@apollo/client";
import { FC } from "react";

export const UsersScreen: FC = () => {
  const { data, loading, error } = useQuery(GetAllUserDocument);
  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Submission error! {error.message}</p>;
  if (!data || !data.users.length) return <p>No data</p>;

  return (
    <div>
      <h1>User</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
