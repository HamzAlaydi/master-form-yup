import * as yup from "yup";

export const registerSchema = yup
  .object({
    email: yup.string().email("this filed must be email").required(),
    password: yup
      .string()
      .min(6, "must be 6 charachters at least")
      .required("is required !!"),
    confarmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required(),
    nickName: yup.string(),
    phone: yup.string().matches(/^[0-9]{8}$/, "phone must be 8 numbers"),
    checkbox: yup.boolean().oneOf([true], "you must agree "),
  })
  .required();
