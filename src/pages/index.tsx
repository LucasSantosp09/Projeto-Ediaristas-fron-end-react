import { Inter } from "next/font/google";
import { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@mui/material";
import { FormElementsContainer } from "@styles/pages/index.style";
import { ProfissionaisPaper } from "@styles/pages/index.style";
import { ProfissionaisContainer } from "@styles/pages/index.style";

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
        <Container>
          <FormElementsContainer>
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
          </FormElementsContainer>

          <ProfissionaisPaper>
            <ProfissionaisContainer>
              <UserInformation
                name={"Lucas Santos"}
                picture={"https://github.com/LucasSantosp09.png"}
                rating={3}
                description={"Betim-MG"}
              />
              <UserInformation
                name={"Lucas Santos"}
                picture={"https://github.com/LucasSantosp09.png"}
                rating={3}
                description={"Betim-MG"}
              />
              <UserInformation
                name={"Lucas Santos"}
                picture={"https://github.com/LucasSantosp09.png"}
                rating={3}
                description={"Betim-MG"}
              />
              <UserInformation
                name={"Lucas Santos"}
                picture={"https://github.com/LucasSantosp09.png"}
                rating={3}
                description={"Betim-MG"}
              />
              <UserInformation
                name={"Lucas Santos"}
                picture={"https://github.com/LucasSantosp09.png"}
                rating={3}
                description={"Betim-MG"}
              />
              <UserInformation
                name={"Lucas Santos"}
                picture={"https://github.com/LucasSantosp09.png"}
                rating={3}
                description={"Betim-MG"}
              />
            </ProfissionaisContainer>
          </ProfissionaisPaper>
        </Container>
      </div>
    </>
  );
}
