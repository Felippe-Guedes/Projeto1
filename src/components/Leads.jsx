import styles from "./Leads.module.css";
import { useState, useEffect } from "react";



export function Leads ({setClientes}) {
    
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [end, setEnd] = useState({cep:'', rua:'', numero:'', bairro:'', complemento:'', cidade:'', estado:''})
    const [dog, setDog] = useState ('')

    const criarCliente = (e) => {
        e.preventDefault()
        const cliente = {name, tel, end}
        setClientes(cliente)
        
    }


	useEffect(() => {
		fetch(`https://viacep.com.br/ws/${end.cep}/json/`)
			.then(response => {
				response.json()
					.then(data => {
						console.log(data);
						setEnd({...end, rua: data.logradouro, cidade: data.localidade, estado: data.uf, bairro: data.bairro  });
					});
			});
	}, [end.cep]);



    const handleChangeName = (e) => {
		setName(e);
	};

    const handleChangeTel = (e) => {
		setTel(e);
	};

    const handleChangeDog = (e) => {
        setDog(e);
    }
   
    
    return (
        <div>            
        <form className={ styles.form } onSubmit={criarCliente} >
            <label className={ styles.cadastro}>
				<h1>Cadastrar Cliente</h1>
			</label>


            <label className={ styles.dados }>
                <p>Nome do cliente</p>
                <input 
                type="text"
                value={name} 
                onChange={(event)=> handleChangeName(event.target.value)}/>           
            </label>

            <label className={ styles.dados }>
                <p>Nome do cão</p>
                <input 
                type="text"
                value={dog}
                onChange={(event)=> handleChangeDog(event.target.value)}/> 
            </label>

            <label className={ styles.dados }>
                <p>Número de Telefone</p>
                <input 
                type="text"
                value={tel}
                onChange={(event)=> handleChangeTel(event.target.value)}
                />           

        
            </label>
            <label className={ styles.dados }>
                <p>Endereço</p>
                <input className={ styles.dados } placeholder="Cep" type="text" onChange={(event)=>setEnd({...end, cep:event.target.value})}/> <br />
                <input className={ styles.dados } value={end.bairro} disabled placeholder="Bairro" type="text" /> <br />
                <input className={ styles.dados } value={end.rua} disabled placeholder="Rua" type="text" /> <br />
                <input className={ styles.dados } value={end.numero} placeholder="Número" type="text" onChange={(event)=>setEnd({...end, numero:event.target.value})} /> <br />
                <input className={ styles.dados } value={end.complemento} placeholder="Complemento" type="text" onChange={(event)=>setEnd({...end, complemento:event.target.value})} /> <br />
                <input className={ styles.dados } value={end.cidade} placeholder="Cidade" type="text" /> <br />
                <input className={ styles.dados }  value={end.estado} placeholder="Estado" type="text" /> <br />
            </label>

            

         

            <label className={ styles.button } >
				<input 
					type="submit" 
					value={"Cadastrar"}
				/>
            </label>    

                        

        </form>
        </div>
    )

        
}