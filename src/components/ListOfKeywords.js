import React, { useContext } from "react";
import Keyword from "./Keyword";
import { Data } from "../Provider";

const ListOfKeywords = () => {
  const { keywords } = useContext(Data);
  return (
    <div>
      <ol>
        {keywords.map((keyword) => {
          return <Keyword keyword={keyword} />;
        })}
      </ol>
    </div>
  );
};

export default ListOfKeywords;
