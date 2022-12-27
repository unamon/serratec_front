import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Styles, Info, Geral} from "./styles"

export const ItemModal = ({ modalOpen, handleCloseModal, materialModal,historico }) => {

    return (
        <Modal
            open={modalOpen}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ padding: 0, margin: 0 }}
        >
            <Box sx={Styles.boxStyle}>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <Info>
                            <div style={Styles.nomeStyle}>{materialModal?.nome}</div>
                        </Info>
                    </Grid>
                    <Grid xs={12}>
                        <Info style={Styles.labelStyle}>Descrição: </Info>
                        <Info style={Styles.textStyle}>{materialModal?.descricao}</Info>
                    </Grid>
                    <Grid xs={12}>
                        <Info style={Styles.labelStyle}>Data Entrada: </Info>
                        <Info style={Styles.textStyle}>{materialModal?.origem.dataEnt}</Info>
                    </Grid>
                    <Grid xs={12}>
                        <Info style={Styles.labelStyle}>Dono: </Info>
                        <Info style={Styles.textStyle}>{materialModal?.origem.pessoaOrigem.nome}</Info>
                    </Grid>
                    <Grid xs={12}>
                        <Info style={Styles.labelStyle}>Tipo de Origem: </Info>
                        <Info style={Styles.textStyle}>{materialModal?.origem.tipoOrigem}</Info>
                    </Grid>
                    <Grid xs={6}>
                        <Info style={Styles.labelStyle}>Data de entrega: </Info>
                        <Info style={Styles.textStyle}>{materialModal?.origem.dataEnt}</Info>
                    </Grid>
                    {materialModal?.origem.dataDevol ? (
                        <Grid xs={6}>
                            <Info style={Styles.labelStyle}>Data de devolução: </Info>
                            <Info style={Styles.textStyle}>{materialModal?.origem.dataDevol}</Info>
                        </Grid>)

                        : <></>}

                    <Grid xs={12}>
                        <Info>
                            <div style={Styles.historicoTitleStyle}>
                                Historico
                            </div>
                        </Info>
                        {historico?.map((hist) => (
                            <Geral key={hist.id}>
                                <div className={"MiniCaixa " + decideColor(hist.status.nome)}>
                                    <span>{hist.status.nome}</span>
                                </div>
                                <div className="text">
                                    <span>Data: {hist?.data}</span>
                                </div>
                                <br />
                                <div className="text">
                                    <span>Responsável: {hist?.pessoa.nome}</span>
                                </div>
                                <div className="text obs">
                                    <span>{hist?.observacao}</span>
                                </div>
                            </Geral>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Modal>

    )
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