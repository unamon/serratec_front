import { ItemListaMateriasAdm } from "../../Components/ItemListaMateriasAdm";
import { ItemListaManutencao } from "../../Components/ItemListaManutencaoAdm";
import { StackAdmin } from "../../Components/StackAdmin"
import { Geral, Styles } from "./style.js"
import { Grid } from "@mui/material"
import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import { ItemModal } from "../../Components/ItemModal";
import { ListaItemsMini } from "../../Components/ListaItemsMini";

function PainelAdministrativo() {
  const [materiais, setMateriais] = useState([])
  const [mOpen, setMOpen] = useState(false)
  const [materialModal, setMaterialModal] = useState()

  const handleOpen = (id) => {
    api.get(
      '/materiais/' + id
    ).then(res => {
      setMaterialModal(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log(JSON.stringify(err))
    })
    setMOpen(true)
  }

  const handleClose = () => {
    setMaterialModal(null)
    setMOpen(false)
  }

  const getAllMaterial = async () => {
    api.get(
      '/historico/simples'
    ).then(res => {
      setMateriais(res.data)
    }).catch((err) => {
      console.log('Erro na requisição get material: ' + JSON.stringify(err))
    })
  }

  useEffect(() => {
    getAllMaterial()
  }, [])


  return (
    <Geral >
      <StackAdmin />
      <Grid container style={Styles.box}>
        <Grid >
          <div style={Styles.container}>
            <h3 style={Styles.title}>Materiais em manutenção</h3>
            <ListaItemsMini items={materiais} />
            {/* <ItemListaManutencao items={materiais} modalOpen={handleOpen}/> */}
          </div>
        </Grid>
        <Grid>
          <div style={Styles.container}>
            <h3 style={Styles.title} >Inventário de materiais</h3>
            <ItemListaMateriasAdm />
          </div>
        </Grid>
      </Grid>
      <ItemModal materialModal={materialModal} modalOpen={mOpen} handleCloseModal={handleClose} />
    </Geral>

  );
}

export default PainelAdministrativo;
