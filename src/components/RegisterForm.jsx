import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // store in local storage or perform other actions
    console.log(data);
  };

  const password = React.useRef({});
  password.current = watch("password", "");

  return (
    <div className="register-container">
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("firstName", { required: true, maxLength: 20 })} />

        <label>Surname</label>
        <input {...register("lastName", { required: true })} />

        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />

        {errors.email && <span>Email is required</span>}

        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
