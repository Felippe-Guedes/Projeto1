   
   
   
   
  export function Plano(){
    const options = [
      {value: '', text: '--Escolha uma opção--'},
      {value: 'aula', text: 'Aula Avulsa'},
      {value: 'plano4', text: 'Plano 4 aulas'},
      {value: 'plano8', text: 'Plano 8 aulas'},
    ];
  
    const [plano, setPlano] = useState(options[0].value);
  
    const handleChangePlano = event => {
      console.log(event.target.value);
      setPlano(event.target.value);
    };
  
    return (
      <div>
        <select value={plano} onChange={handleChangePlano}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    );
  };