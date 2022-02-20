import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Alert,
  AlertTitle,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validation/yup";

//Styles
import "./LoginTow.css";

const LoginTow = () => {
  //states
  const [data, setData] = useState(false);

  //Constanses
  const localData = JSON.parse(localStorage.getItem("formData"));

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: localData.email,
      password: localData.password,
      confarmPassword: localData.confarmPassword,
      nickName: localData.nickName,
      phone: localData.phone,
      checkbox: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    setData(true);
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
  };

  const { checkbox } = watch();

  console.log();
  //Return
  return (
    <>
      <Alert style={{ display: data ? "" : "none" }} severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              id="filled-required"
              label="email"
              margin="dense"
              {...field}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          )}
        />
        <br></br>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-password-input"
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="dense"
              {...field}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          name="confarmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-confarm-password-input"
              fullWidth
              label="Confarm Password"
              type="password"
              autoComplete="current-password"
              margin="dense"
              {...field}
              error={Boolean(errors.confarmPassword)}
              helperText={errors.confarmPassword?.message}
            />
          )}
        />
        <Controller
          name="nickName"
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-nickName-input"
              fullWidth
              label="Nick Name"
              margin="dense"
              {...field}
              error={Boolean(errors.nickName)}
              helperText={errors.nickName?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-phone-input"
              fullWidth
              label="Phone Number"
              margin="normal"
              type="dense"
              {...field}
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message}
            />
          )}
        />
        <Controller
          name="checkbox"
          required="true"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox />}
              label="I Agree"
              {...field}
            />
          )}
        />
        <FormHelperText
          className="check"
          style={{ visibility: checkbox ? "hidden" : "visible" }}
        >
          You must accept
        </FormHelperText>

        <Button
          disabled={Object.keys(errors).length > 0}
          type="submit"
          variant="contained"
        >
          Contained
        </Button>
      </form>
    </>
  );
};

export default LoginTow;
