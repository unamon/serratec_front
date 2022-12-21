import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

export const admPagePdf = (materiais) =>{
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const reportTitle =[
        {
            text: 'Relatório Página de Adminstração',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ]

    const reportTitle2 =[
        {
            text: 'Materiais em Manutenção',
            fontSize: 13,
            bold: true,
            margin: [3, 20, 0, 10]
        }
    ]

    const dados = materiais?.map((mat) =>{
        return[
            {text: mat.numSerie,  fontSize:9, margin: [0, 2, 0, 2 ]},
            {text: mat.nome,  fontSize:9, margin: [0, 2, 0, 2 ]},
            {text: mat.descricao,  fontSize:9, margin: [0, 2, 0, 2 ]},
        ]
    })

    const manutencaoLista = materiais?.filter((item) =>item.status === "Manutenção").map((man) =>{
        return[
            {text: man.status,  fontSize:9, margin: [0, 2, 0, 2 ]},
            {text: man.nome,  fontSize:9, margin: [0, 2, 0, 2 ]},
            {text: man.descricao,  fontSize:9, margin: [0, 2, 0, 2 ]}
        ]
    })

    const details = [
        {
            table:{
                headerRows: 1,
                width: ['*', '*', '*', '*'],
                body: [
                    [
                        {text: 'numero de série', style: 'tableHeader', fontSize:10},
                        {text: 'nome', style: 'tableHeader', fontSize:10},
                        {text: 'descrição', style: 'tableHeader', fontSize:10},
                        // {text: 'proprietário', style: 'tableHeader', fontSize:10}
                    ],
                    ...dados
                ]
            },
            layout: 'lightHorizontalLines',
        }
    ]

    const manutencao = [
        {
            table:{
                headerRows: 1,
                width: ['*', '*', '*', '*'],
                body: [
                    [
                        {text: 'status', style: 'tableHeader', fontSize:10},
                        {text: 'nome', style: 'tableHeader', fontSize:10},
                        {text: 'descrição', style: 'tableHeader', fontSize:10},
                    ],
                    ...manutencaoLista
                ]
            },

            layout: 'lightHorizontalLines',
        }
            
    ]

    const rodape = (currentPage, pageCount) =>{
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment:'right',
                fontSize: 15,
                bold: true,
                margin: [0, 10, 20, 0]
            }
        ]
    }

    const docDefinitions = {
        pageSize: 'a4',
        pageMargins: [15,50,15,40],

        header: [reportTitle],
        content: [details, reportTitle2, manutencao ],
        footer: rodape
    }

    pdfMake.createPdf(docDefinitions).download()

}