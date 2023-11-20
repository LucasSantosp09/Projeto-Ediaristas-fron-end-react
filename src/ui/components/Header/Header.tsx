import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.styles";
import { Toolbar } from "@mui/material";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar>
        <HeaderLogo src={"/img/logos/logo.svg"} alt={"e-diaristas"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
