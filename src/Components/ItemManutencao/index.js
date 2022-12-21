import { id } from "date-fns/locale";
import React, {useState, useEffect} from "react";
import { api } from "../../Services/api";
import { MiniItem, Geral } from "./style";
import { toast } from "react-toastify";


export const ItemManutencao = () =>{
    const [historico, setHistorico] = useState([])
    const [manutencao, setManutencao] = useState([])
    const [material, setMaterial] = useState(null)
    const [pessoas, setPessoas] = useState()
    const [categorias, setCategorias] = useState()
    // const [historico, setHistorico] = useState(null)
    const [idPessoaResponsavel, setIdPessoaResponsavel] = useState(null)
    const [obs, setObs] = useState(null)
    const [idStatus, setIdStatus] = useState(null)
    const [openManutencao, setOpenManutencao] = useState()
    const [materiais, setMateriais] = useState([])

    const getManutencao = () =>{
        api.get(
            '/historico/simples'
        ).then(res =>{
            console.log(res.data)
            setHistorico(res.data)

        }).catch((err) =>{
            console.log('Erro na requisção de material' + JSON.stringify(err))
        })
    }

    

    const decideColor = (status) => {
        let color;
        switch (status) {
            case "Manutenção":
                color = "orange"
                break
            case "Empréstimo":
                color = "yellow"
                break
            case "Disponível":
                color = "green"
                break
            case "Indisponível":
            default:
                color = "gray"
                break
        }
        return color;
    }


    {historico?.map(hist =>(
        api.get(
            `materiais/${hist?.id}`
        ).then(res =>{
            console.log(res.data)
        }).catch((err) =>{
            console.log('erro no map ' + JSON.stringify(err))
        })
    ))}

    const getMaterial = () =>{
        api.get(
            '/materiais'
        ).then(res =>{
            console.log( res.data)
            setManutencao(res.data)
        }).catch((err)=>{
            console.log('erro no get material' + JSON.stringify(err))
        })
    }

    useEffect(() =>{
        getManutencao()
        getMaterial()

        api.get("/pessoas")
            .then((res) => {
                setPessoas(res.data)
            }).catch(err => {
                console.log(err)
            })
        api.get(
            '/materiais'
        ).then(res => {
            setMateriais(res.data)
            console.log(res.data)
        }).catch((err) => {

        })
    },[])

    return(
        <>
            
           {historico?.filter(item => item.status ==="Manutenção")?.map(hist =>(
            
            <Geral>
                <div className={"MiniCaixa " + decideColor(hist.status) }>
                    <span>{hist?.status}</span>
                </div>
                <div>
                    <span>{hist?.dono}</span>
                </div>
                <div>
                    <span>{hist?.descricao}</span>
                </div>
                <div>
                    
                </div>
            </Geral>
           ))}
        </>
    )
}