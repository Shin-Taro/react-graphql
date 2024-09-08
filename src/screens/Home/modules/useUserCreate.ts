import { CreateUserDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client";

export const useUserCreate = () => {
  const [createUser, { loading, error }] = useMutation(CreateUserDocument);
  return {
    createUser,
    loading,
    error,
  };
};
