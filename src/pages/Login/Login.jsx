import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/material";

const Login = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });
  const onSubmit = (data) => console.log(data);
  console.log(watch("firstName"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <Input {...field} />}
      />

      <input type="submit" />
    </form>
  );
};

export default Login;
