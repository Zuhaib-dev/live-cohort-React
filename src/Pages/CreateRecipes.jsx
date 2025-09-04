import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/RecipeContext";

const CreateRecipes = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("image")}
          className="border-b outline-0 p-2 block"
          type="url"
          placeholder="Image Url"
        />
        <input
          {...register("title")}
          className="border-b outline-0 p-2 block"
          type="text"
          placeholder="Recipe Title"
        />
        <input
          {...register("chef")}
          className="border-b outline-0 p-2 block"
          type="text"
          placeholder="Chef Name"
        />
        <textarea
          {...register("description")}
          className="border-b outline-0 p-2 block"
          placeholder="Desciption Here"
        ></textarea>
        <textarea
          {...register("ingridents")}
          className="border-b outline-0 p-2 block"
          placeholder="Ingriendts Here"
        ></textarea>
        <textarea
          {...register("instructions")}
          className="border-b outline-0 p-2 block"
          placeholder="instruction Here"
        ></textarea>
        <select
          {...register("category")}
          className="border-b outline-0 p-2 block bg-black"
        >
          <option value="cat-1">Category 1</option>
          <option value="cat-2">Category 2</option>
          <option value="cat-3">Category 3</option>
        </select>
        <button className="bg-green-500 px-4 py-2 rounded-xl mt-4 active:scale-95 block ">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateRecipes;
