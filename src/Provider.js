import React, { createContext, useState } from "react";

export const Data = createContext({});

const Provider = ({ children }) => {
  const [keywords, setKeywords] = useState(["trending"]);

  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState([]);
  return (
    <Data.Provider
      value={{
        keywords,
        loading,
        image,
        setKeywords,
        setLoading,
        setImage,
      }}
    >
      {children}
    </Data.Provider>
  );
};
export default Provider;
