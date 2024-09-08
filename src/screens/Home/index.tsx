import { FC } from "react";
import { useUserCreate } from "./modules/useUserCreate";
import { useRouter } from "next/router";

export const HomeScreen: FC = () => {
  const { createUser, loading, error } = useUserCreate();
  const router = useRouter();

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Submission error! {error.message}</p>;

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    console.dir(
      {
        name: event.currentTarget["user-name"].value,
        email: event.currentTarget["user-email"].value,
      },
      { depth: null }
    );
    event.preventDefault();
    await createUser({
      variables: {
        data: {
          name: event.currentTarget["user-name"].value,
          email: event.currentTarget["user-email"].value,
        },
      },
    });

    router.push("/users");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-[80vw] mt-7 mx-auto text-center">
          <div>
            <label>
              Name:
              <input type="text" name="user-name" />
            </label>
          </div>
          <div className="mt-14">
            <label>
              Email:
              <input type="email" name="user-email" />
            </label>
          </div>
          <div className="mt-14">
            <button type="submit">送信</button>
          </div>
        </div>
      </form>
    </div>
  );
};
