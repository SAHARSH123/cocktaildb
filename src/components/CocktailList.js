import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cockTails } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cockTails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cockTails.map((item) => {
          return <Cocktail key={item.idDrink} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
