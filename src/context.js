import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [loading, setLoading] = useState(true);
  const [cockTails, setCockTails] = useState([]);

  const fetchCockTails = useCallback(async () => {
    try {
      const fullUrl = url + searchTerm;
      const response = await fetch(fullUrl);
      const cockTails = await response.json();
      setLoading(false);
      setCockTails(cockTails?.drinks || []);
    } catch (err) {
      setLoading(false);
      setCockTails([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      fetchCockTails();
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [searchTerm, fetchCockTails]);

  return (
    <AppContext.Provider
      value={{ searchTerm, setSearchTerm, loading, cockTails }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
