import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { contextrecipe } from "../context/RecipeConetxt";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(contextrecipe);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    reset();
    toast.success("Recipe Created ✅");
    navigate("/recipes");
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
          placeholder="Description Here"
        />
        <textarea
          {...register("ingredients")}
          className="border-b outline-0 p-2 block"
          placeholder="Ingredients Here"
        />
        <textarea
          {...register("instructions")}
          className="border-b outline-0 p-2 block"
          placeholder="Instructions Here"
        />
        <select
          {...register("category")}
          className="border-b outline-0 p-2 block bg-black"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>
        <button className="bg-green-500 px-4 py-2 rounded-xl mt-4 active:scale-95 block ">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
