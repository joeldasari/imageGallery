import { useContext, useState } from "react";
import { AppContext } from "../App";
export const Search = () => {
  const { setHashtag } = useContext(AppContext);
  const [search, setSearch] = useState("");
  return (
    <div className="my-6 flex items-center justify-around gap-2 max-sm:flex-col">
      <div>
        <p
          className="text-2xl font-semibold hover:cursor-pointer"
          onClick={() => setHashtag("")}
        >
          Image Gallery
        </p>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search by hashtags..."
          className=" w-[250px] rounded-sm border-[1px] border-black p-[3px] text-sm outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setHashtag(search)}
          className="rounded-sm bg-blue-500 p-[6px] text-xs text-white hover:bg-blue-600 active:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};
