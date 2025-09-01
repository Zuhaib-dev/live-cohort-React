import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const create = (props) => {
  const todos = props.Todos;
  const settodos = props.setTodos;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.isComplete = false;
    data.id = nanoid();

    const newTodos = {
      id: nanoid(),
      // title,
      isComplete: false,
    };
  };
  return (
    <div className=" w-[60%]  p-10 mb-10">
      <h1 className="text-5xl font-thin mb-10  ">
        Set <span className="text-red-400 mb-10">Reminder</span> for{" "}
        <br className="mb-10" /> Tasks
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title")}
          className="border-b w-100 text-2xl font-thin p-2 outline-0"
          type="text"
          placeholder="Todo title"
        />
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
