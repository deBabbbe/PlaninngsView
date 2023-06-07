import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const AddApplications = ({ addApplication }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const setValueFor =
    (setter: Dispatch<SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) =>
      setter(event.target.value);

  const callAddApplication = () => addApplication({ name, duration, price });
  const callAddApplicationA = (event) => {
    if (event.key === "Enter") callAddApplication();
  };

  return (
    <>
      <input onChange={setValueFor(setName)}></input>
      <input onChange={setValueFor(setDuration)}></input>
      <input
        onChange={setValueFor(setPrice)}
        onKeyDown={callAddApplicationA}
      ></input>
      <button onClick={callAddApplication}>Add</button>
    </>
  );
};
export default AddApplications;
