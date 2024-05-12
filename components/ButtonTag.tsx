import React from "react";

const ButtonTag = ({ name, onClick, isSlected }: any) => {
  const buttonStyle = isSlected
    ? "text-slate-800 font-semibold bg-yellow-400"
    : "text-slate-800 hover:bg-yellow-400/60";
  return (
    <div>
      <button
        className={`${buttonStyle} px-2 py-1 font-semibold  transition-all rounded-full`}
        onClick ={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonTag;
