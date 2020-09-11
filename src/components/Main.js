import React, { useState } from "react";
import Search from "./Search";
import ListOfKeywords from "./ListOfKeywords";
import ListOfImages from "./ListOfImages";

const Main = () => {
  const [keywords, setKeywords] = useState(["arriba", "abajo", "derecha"]);
  return (
    <main>
      <Search setKeywords={setKeywords} />
      <ListOfKeywords keywords={keywords} />
      <ListOfImages />
      <ListOfImages />
    </main>
  );
};

export default Main;
