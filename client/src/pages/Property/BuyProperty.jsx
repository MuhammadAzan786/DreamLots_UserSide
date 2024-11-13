import React from "react";
import HomeAppBar from "../Home/HomeAppBar";
import PropertySearchForm from "./PropertySearchForm";
import BuyPropertyCrads from "./BuyPropertyCrads";
import HomeSectionFooter from "../Home/HomeSectionFooter";
import HomeSectionThree from "../Home/HomeSectionThree";

const BuyProperty = () => {
  return (
    <>
      <HomeAppBar />
      <PropertySearchForm />
      <BuyPropertyCrads />
      <HomeSectionThree />
      <HomeSectionFooter />
    </>
  );
};

export default BuyProperty;
