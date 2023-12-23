import { Inter } from "next/font/google";
import { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <SafeEnvironment />
        <PageTitle
          title={"Conheça os profissionais"}
          subtitle={
            "Preencha seu endereço e veja todos os profissionais da sua localidade"
          }
        />
        <TextFieldMask
          mask={"99.999-999"}
          label={"Digite seu CEP"}
          fullWidth
          variant={"outlined"}
        />
        <Typography color={"error"}>CEP inválido</Typography>
        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{ width: "200px" }}
        >
          Buscar
        </Button>
        <UserInformation
          name={"Lucas Santos"}
          picture={"https://github.com/LucasSantosp09.png"}
          rating={3}
          description={"Betim-MG"}
        />
      </div>
    </>
  );
}
