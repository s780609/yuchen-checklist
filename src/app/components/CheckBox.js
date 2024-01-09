"use client";

export default function CheckBox({ id = "", text = "", checked, onChange }) {
  if (id === "") {
    id = Math.random();
  }

  const handleChange = (e) => {
    if (typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <>
      <input
        id={id}
        checked={checked}
        onChange={handleChange}
        type="checkbox"
        className="ml-2"
      ></input>
      <label htmlFor={id} className="mr-2">
        {text}
      </label>
    </>
  );
}
