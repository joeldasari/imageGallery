import { Gallery } from "./components/Gallery";
import { Search } from "./components/Search";
import { createContext, useState } from "react";
export const AppContext = createContext();

const App = () => {
  const [hashtag, setHashtag] = useState("");
  return (
    <div>
      <AppContext.Provider value={{ hashtag, setHashtag }}>
        <Search />
        <Gallery />
      </AppContext.Provider>
    </div>
  );
};

export default App;
