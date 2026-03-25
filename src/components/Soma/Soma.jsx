import { useState } from "react";

const Soma = () => {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    
    const [exibirPagina, setExibirPagina] = useState(false);

    const [resultado, setResultado] = useState('');

    function calcularSoma(n1, n2){
        return n1 + n2;
    }

    function handleSubmit(e){
        e.preventDefault();
        setExibirPagina(true);
        setResultado(calcularSoma(numero1, numero2));
    }

    return(
        <div className="container mx-auto p-4 font-fontRoboto">
            <div className="flex flex-col md:fle-row gap-5">
                <h1 className="text-white font-bold text-center">Soma 🚀</h1>
                <form onSubmit={handleSubmit}>
                    <h4 className="text-center text-white">
                        Número 1
                    </h4>
                    <input type="text" onChange={(e) => setNumero1(Number(parseInt(e.target.value)))} className="block mx-auto"/>
                    <h4 className="text-center text-white">
                        Número 2
                    </h4>
                    <input type="text" onChange={(e) => setNumero2(Number(parseInt(e.target.value)))} className="block mx-auto" />
                    <br />
                    <button type="submit" className="block mx-auto bg-blue-500 w-[150px] p-2 rounded text-white hover:bg-blue-700" onClick="alert('SOMA!')">Enviar</button>
                </form>
            </div>
                {
                        exibirPagina && (
                            <h2 className="text-white text-center font-bold text-4xl">
                                O resultado é {resultado}
                            </h2>
                        )
                    }
        </div>
    )
}

export default Soma;