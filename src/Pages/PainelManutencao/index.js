import React, {useState, useEffect} from "react"
import {api} from "../../Services/api.js"
import {Geral, Styles} from "./style.js"
import { Grid } from "@mui/material"
import { ListaItemsMini } from "../../Components/ListaItemsMini"
import {ItemModal} from "../../Components/ItemModal"
function PainelManutencao() {  
	  const [materiais, setMateriais] = useState([])
	  const [mOpen, setMOpen] = useState(false)
	  const [materialModal, setMaterialModal] = useState()
	  const [historicoModal, setHistoricoModal] = useState()

  const handleOpen = (id) => {
    api.get(
      '/materiais/' + id
    ).then(res => {
      setMaterialModal(res.data)
    }).catch((err) => {
      console.log(JSON.stringify(err))
    })
    api.get(
      '/historico/material/' + id
    ).then(res => {
      // console.log(res.data)
      setHistoricoModal(res.data)
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
      <Grid container style={Styles.box}>
        <Grid >
          <div style={Styles.container}>
            <h3 style={Styles.title}>Materiais em manutenção</h3>
            <ListaItemsMini items={materiais?.filter(item => {
              return(item.status === "Manutenção")
            })} handleOpenModal={handleOpen}/>
          </div>
	    </Grid>
	    </Grid>
	    <ItemModal materialModal={materialModal} modalOpen={mOpen} handleCloseModal={handleClose} historico={historicoModal}/>
    </Geral>

  );
}



export default PainelManutencao;
