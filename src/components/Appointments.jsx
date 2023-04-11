import { Leads } from "./Leads"
import { Agenda } from "./Agenda"
import { Clientes } from "./Clientes"
import { useState, useEffect } from "react"




export function Appointments({text}) {

  const [clientes, setClientes] = useState([])

  const addCliente = (cliente) => {
    if (clientes.length > 0) {
    setClientes([...clientes, cliente])  
  } else {
    setClientes([cliente])
  }
}
 
  useEffect(() => {
      console.log(clientes)
  }, [clientes])

  function handleDeleteClient (clientToDelete) {
    const clientsWhitoutDeletedOne = clientes.filter(cliente => {
      return cliente !== clientToDelete;
    })
    setClientes(clientsWhitoutDeletedOne);
  }
  

    if (text==='Cadastrar cliente'){
     return (<Leads setClientes={addCliente}/>)
    } 
    if (text==='Clientes'){
      return (<Clientes clientes={clientes} deletarCliente={handleDeleteClient}/>)
    }
    if (text==='Agenda'){
      return (<Agenda/>)
     }
}


