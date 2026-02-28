import { useTranslation } from "react-i18next";
import z from "zod";

const useSignupSchema = () => {
  const { t } = useTranslation();

  const schema = z
    .object({
      username: z.string().min(1, t("common:signup.form.errors.required")),
      email: z.email(t("common:signup.form.errors.invalidEmail")),
      password: z.string().min(6, t("common:signup.form.errors.weakPassword")),
      confirmpass: z
        .string()
        .min(1, t("common:signup.form.errors.confirmPassword")),
    })
    .refine((data) => data.password === data.confirmpass, {
      message: " Password Is not the same",
      path: ["confirmpass"],
    });
  return schema;
};

export type SignupSchema = z.infer<ReturnType<typeof useSignupSchema>>;

export default useSignupSchema;
