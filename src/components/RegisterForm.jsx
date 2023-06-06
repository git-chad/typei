import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-container">
      <div>
        <label>Name</label>
        <input type="text" name="name" ref={register({ required: true })} />
      </div>
    </div>
  );
};

export default RegisterForm;
