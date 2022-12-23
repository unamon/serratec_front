import axios from "axios"
export const api = axios.create({

  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  }
})

export const createSession = async (username, password) => {
  return api.post('/login', { username, password })
}


export class ApiComm {

  static api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  async getAllMateriais() {
    await api.get(
      '/historico/simples'
      // {headers:"Authorization: " + ` Bearer `},
    ).then(res => {
      return res.data
    }).catch((err) => {
      console.log('Erro na requisição get historico simples: ' + JSON.stringify(err))
    })
  }

  async getAllPessoas() {
    await api.get(
      '/pessoas'
    ).then((res) => {
      return res.data
    }).catch((err) => {
      console.log("Erro no getpessoas: " + JSON.stringify(err))
    })
  }

  async getAllCategorias() {
    await api.get(
      '/categoria',
    ).then((res) => {
      return res.data
    }).catch((err) => {
      console.log("erro no get categoria: " + JSON.stringify(err))
    })
  }

  async postMaterial(material) {
    await api.post("/materiais", material).then(res => {
      return res.data
    }).catch(err =>{
      console.log("Error no post de material: " + err)
    })
  }

  async postPessoa(pessoa) {
    await api.post("/pessoas", pessoa).then(res=>{
      return res.data
    }).catch(err => {
      console.log("Error no post pessoa: " + err)
    }) 
  }

  async putMaterial(id, material) {
    await api.put("/materiais/" + id, material).then(res => {
      return res.data
    }).catch(err =>{
      console.log("Error no put de material: " + err)
    })
  }
}