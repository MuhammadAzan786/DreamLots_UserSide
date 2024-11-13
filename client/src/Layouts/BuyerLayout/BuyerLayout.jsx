import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
const BuyerLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.Auth.user);
  console.log(user);
  useEffect(() => {
    if (!user || user.role !== "buyer") {
      navigate("/login");
    }
  }, [user]);
  return (
    <>
      <Outlet />
      <h1>buyer layout</h1>
    </>
  );
};

export default BuyerLayout;
