import React, { useState } from "react";
import Search from "./Search";
import ListOfKeywords from "./ListOfKeywords";

const Main = () => {
  const [keywords, setKeywords] = useState(["arriba", "abajo", "derecha"]);
  return (
    <main>
      <Search setKeywords={setKeywords} />
      <ListOfKeywords keywords={keywords} />
    </main>
  );
};

export default Main;
