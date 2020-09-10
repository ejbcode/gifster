import React, { createContext, useState } from "react";

export const Data = createContext({});

const Provider = ({ children }) => {
  const [keywords, setKeywords] = useState(["arriba", "abajo", "derecha"]);

  return (
    <Data.Provider
      value={{
        keywords,
        setKeywords,
      }}
    >
      {children}
    </Data.Provider>
  );
};
export default Provider;
