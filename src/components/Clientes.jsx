import TabelaClientes from './TabelaClientes'


export function Clientes({clientes, deletarCliente}) {
    return(
        <TabelaClientes clientes={clientes} deletarCliente={deletarCliente}/>
    )
}