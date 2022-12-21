import { ItemListaMateriasAdm } from "../../Components/ItemListaMateriasAdm";
import { ItemListaManutencao } from "../../Components/ItemListaManutencaoAdm";
import { StackAdmin } from "../../Components/StackAdmin"
import { Geral } from "./style.js"
import { Grid } from "@mui/material"

const title = {
  fontSize: 18,
  fontFamily: "Inter",
  fontWeight: 600,
  marginBottom: ".5em",
  textAlign: "center"
}

const box = {
  marginTop: 10,
  display: "flex",
  justifyContent: "space-evenly"
}

const container = {
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center"
}

function PainelAdministrativo() {
  return (
    <Geral >
      <StackAdmin />
      <Grid container style={box}>
        <Grid >
          <div style={container}>
            <h3 style={title}>Materiais em manutenção</h3>
            <ItemListaManutencao />
          </div>
        </Grid>
        <Grid>
          <div style={container}>
            <h3 style={title} >Inventário de materiais</h3>
            <ItemListaMateriasAdm />
          </div>
        </Grid>
      </Grid>
    </Geral>

  );
}

export default PainelAdministrativo;
