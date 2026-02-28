import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../i18n";
import API from "../inceptors";
import { routes } from "../Routes/routes";
import useSignupSchema, { type SignupSchema } from "../schemas/Signup";
const useSignup = () => {
  const navigate = useNavigate();
  // SCHEMA
  const schema = useSignupSchema();

  //   REACT HOOK FORM
  const form = useForm<SignupSchema>({ resolver: zodResolver(schema) });

  //SendData

  const PostData = async (info: SignupSchema) => {
    const res = await API.post("/users", info);
    return res;
  };
  //   Mutation
  const mutation = useMutation({
    mutationFn: PostData,
    onSuccess: (data) => {
      console.log("There IS YOUr Data", data);
      navigate(routes.LOGIN);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  //   handelSubmit
  const SendData = (data: SignupSchema) => {
    mutation.mutate(data);
  };
  return {
    register: form.register,
    errors: form.formState.errors,
    SendData,
    handleSubmit:form.handleSubmit
  };
};

export default useSignup;
