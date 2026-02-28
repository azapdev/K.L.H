import { useTranslation } from "react-i18next";
import { z } from "zod";

export const useLoginSchema = () => {
  const { t } = useTranslation();
  const schema = z.object({
    email: z.string().email(t("common:Login.fields.email.errorMessage2")),
    password: z
      .string()
      .min(6, t("common:Login.fields.password.errorMessage2")),
  });
  return schema;
};

export type LoginSchema = z.infer<ReturnType<typeof useLoginSchema>>;
