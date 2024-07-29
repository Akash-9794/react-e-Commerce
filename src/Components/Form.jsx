import React from "react";
import { useForm } from "react-hook-form";

function Form({ onSubmit }) {
  const { register, handleSubmit,reset} = useForm();
  const handleSubmitForm = (newUser) =>{
    onSubmit(newUser);
    reset();
  }

  return (
    <div className="mt-10 flex gap-10 justify-center">
      <form className="flex gap-10" onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          {...register("name")}
          placeholder="name"
          required
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          {...register("email")}
          placeholder="Email"
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          {...register("imageUrl")}
          placeholder="image-url"
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          {...register("discription")}
          placeholder="discription"
          required
        />
        <input
          className="px-5 py-1 bg-blue-400 text-base font-semibold rounded-md text-white"
          type="submit"
          value="Add User"
        />
      </form>
    </div>
  );
}

export default Form;