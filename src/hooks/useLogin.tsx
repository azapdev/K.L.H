import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../i18n";
import API from "../inceptors";
import { useLoginSchema, type LoginSchema } from "../schemas/Login";
import { AuthContext } from "./Context";
const useLogin = () => {
  const { t } = useTranslation();
  const navigat = useNavigate();
  //   AuthContext
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within AuthProvider");
  }
  const { Login, Logout } = authContext;
  //   SCHEMA
  const schema = useLoginSchema();
  //   react HOK FORM
  const form = useForm({
    resolver: zodResolver(schema),
  });
  // CHEAK DATA
  const cheakDAta = async (info: LoginSchema) => {
    const res = await API.get("/users");
    const users = res.data;
    const user = users.find((u: LoginSchema) => u.email === info.email);
    if (!user) {
      form.setError("email", {
        message: `${t("common:Login.fields.email.errorMessage")}`,
      });
      throw new Error("USer Not Found");
    }
    if (user.password !== info.password) {
      form.setError("password", {
        message: `${t("common:Login.fields.password.errorMessage")}`,
      });
      throw new Error(" The Password Is Un Correct");
    } else {
      return user;
    }
  };

  //   useMutation
  const mutation = useMutation({
    mutationFn: cheakDAta,
    onSuccess: (data) => {
      console.log("You Were Log In Successful");
      Login(data.password);
      navigat("/");
    },
    onError: (error) => {
      console.log(error.message);
      Logout();
    },
  });

  //HandelSubmit
  const sendData: SubmitHandler<LoginSchema> = (data) => {
    mutation.mutate(data);
  };

  return {
    form,
    sendData,
  };
};

export default useLogin;
