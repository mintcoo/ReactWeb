import { useState } from "react";

interface CircleProps {
  CircleColor: String;
}

function Circle({ CircleColor }: CircleProps) {
  const [id, setId] = useState("");

  const changeId = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setId(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", id);
  };
  return (
    <div className="flex flex-col items-center justify-center h-40 text-4xl text-teal-800 rounded-full w-fit bg-rose-400">
      <div>{CircleColor}</div>
      <form onSubmit={onSubmit} className="bg-teal-500">
        <input
          type="text"
          placeholder="username"
          onChange={changeId}
          value={id}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Circle;
