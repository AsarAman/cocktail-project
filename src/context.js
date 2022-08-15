import React, { useCallback, useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('a');

  const fetchDrinks = useCallback( async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      console.log(drinks);
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strCategory,
            strDrinkThumb,
            strGlass,
            strAlcoholic,
            strDrink,
            // strIngredient1,
            // strIngredient2,
            // strIngredient3,
            // strIngredient4,
            // strIngredient5,
          } = item;
          return {
            id:idDrink,
            category:strCategory,
            image:strDrinkThumb,
            glass:strGlass ,
            info:strAlcoholic,
            name:strDrink ,
          };
        });
        setCocktails(newCocktails)
      }else{
        setCocktails([])
      }
      setLoading(false)
    } catch {
        setLoading(false)
        console.error();
    

    }
  },[searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider value={{cocktails,loading,searchTerm,setSearchTerm}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
