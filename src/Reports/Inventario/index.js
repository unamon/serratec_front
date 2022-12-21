import React from "react";
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { Inventario } from "../../Pages/Inventario";

export const inventarioPdf = (historico) =>{
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Inventario',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ]

    const dados = historico.map((mat) =>{
        return[
                {text: mat.numSerie,  fontSize:9, margin: [0, 2, 0, 2 ]},
                {text: mat.nome,  fontSize:9, margin: [0, 2, 0, 2 ]},
                {text: mat.descricao,  fontSize:9, margin: [0, 2, 0, 2 ]},
                // {text: mat.origem.pessoaOrigem.nome,  fontSize:9, margin: [0, 2, 0, 2 ]}
                
            ]
        })
    

    const details = [
        {
            table:{
                headerRows: 5,
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
            layout: 'lightHorizontalLines'
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
        content: [details],
        footer: rodape
    }

    pdfMake.createPdf(docDefinitions).download()
}