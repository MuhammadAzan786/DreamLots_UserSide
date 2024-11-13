import React from "react";
import HomeAppBar from "../Home/HomeAppBar";
import { Container } from "@mui/material";
import ContactUsForm from "./ContactUsForm";
import HomeSectionFooter from "../Home/HomeSectionFooter";

const ContactUs = () => {
  return (
    <>
      <HomeAppBar />
      <ContactUsForm />
      <HomeSectionFooter />
    </>
  );
};

export default ContactUs;
