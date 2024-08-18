import { useState } from "react";

const SearchIMG = ({ search }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setText(e.target.value);
    search(text);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="max-sm-w sm:my-10 my-5 sm:mx-5 mx-4">
        <div className=" w-full max-sm-w ">
          <input
            type="text"
            placeholder="search here..."
            value={text}
            onChange={onSubmit}
            className="w-full focus:outline-none p-[12px] font-[8px] border-4 border-indigo-200 border-b-indigo-500 bg-transparent text-white 
            rounded-[25px] "
          ></input>
        </div>
      </form>
    </div>
  );
};
export default SearchIMG;
