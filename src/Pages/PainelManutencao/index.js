import { useNavigate } from "react-router-dom";
import { ItemListaManutencaoAdm } from "../../Components/ItemListaManutencaoAdm";
import { StackAdmin } from "../../Components/StackAdmin"
import {Box, Geral} from "./style.js"
import { ItemManutencao } from "../../Components/ItemManutencao";
function PainelManutencao(props) {
  const navigate = useNavigate();

  return (
    <Geral>
    <Box>
        <div>
          <h4>Materiais para Manuntenção</h4>
          <ItemManutencao />
        </div>
      </Box>
    </Geral>
      
  );
}

export default PainelManutencao;
