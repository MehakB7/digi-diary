import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import Header from "@/components/header/header";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

layout.propTypes = {};

export default layout;
