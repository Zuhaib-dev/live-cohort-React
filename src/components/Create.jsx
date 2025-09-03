import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";

const create = () => {
  const [todos, settodos] = useContext(todoContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.isComplete = false;
    data.id = nanoid();
    console.log(data);
    const copyTodos = [...todos];
    copyTodos.push(data);
    settodos(copyTodos);
    toast.success("Todo Created!");

    reset();
  };

  return (
    <div className=" w-[60%]  p-10 mb-10">
      <h1 className="text-5xl font-thin mb-10  ">
        Set <span className="text-red-400 mb-10">Reminder</span> for{" "}
        <br className="mb-10" /> Tasks
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "Title Can't be empty" })}
          className="border-b w-100 text-2xl font-thin p-2 outline-0"
          type="text"
          placeholder="Todo title"
        />
        <small className="font-thin text-red-500">
          {errors?.title?.message}
        </small>
        <br />
        <br />
        <br />
        <button className="btn text-xl px-10 py-2 bg-red-500  border active:scale-95 rounded-xl mt-5  ">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default create;
