import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterTitle>Quem Somos</FooterTitle>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          doloremque sequi velit molestiae unde enim minima quidem magnam
          deleniti quam temporibus facilis neque inventore, in eveniet adipisci
          cumque, nisi reiciendis?
        </Typography>
        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
        <AppList>
          <li>
            <a href={"/"} target="{'_blnak}" rel={"noopener noreferrer"}>
              <img src={"/img/logos/app-store.png"} alt={"App Store"} />
            </a>
          </li>
          <li>
            <a href={"/"} target="{'_blnak}" rel={"noopener noreferrer"}>
              <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
            </a>
          </li>
        </AppList>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
