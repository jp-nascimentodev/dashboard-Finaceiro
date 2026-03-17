import { useState } from "react";
import { gastoStore } from "../../store/gastoStore";


const Registrar = () => {
    
    const [gasto, setGasto] = useState("")
    const [valor,setValor] = useState("")
    const {listGastos,  addGastos} = gastoStore()


    const handleSubmit = (e) =>{
        e.preventDefault()

         if(!gasto || !valor) return

        const data = {
          gasto,
          valor,
        }
       


        addGastos(data)
        console.log(listGastos)
        setGasto("")
        setValor("")
    }


  return (
    <div className="flex justify-around  items-center p-20 w-screen ">
        <div className="card bg-cyan-100 w-96  h-96 shadow-2xl  ">
            <h1 className="card-title-center text-emerald-500 font-bold text-center mt-5">Registrar</h1>

            
            <form onSubmit={handleSubmit}  className="flex flex-col gap-3 justify-center items-center mt-5">
                  <label htmlFor="gasto" className="text-emerald-500 font-bold">Gasto</label>
                  <input type="text"  name="gasto"placeholder="Digite em que foi gasto"
                   className="input input-accent border-3 rounded-b-xl placeholder:text-white outline-0"
                  onChange={(e) =>setGasto(e.target.value)} value={gasto}
                   />
                  <label htmlFor="valor" className="text-emerald-500 font-bold">Valor</label>
                  <input type="number" name="valor" step= "0.01"  min='0.00' placeholder="Digite o valor gasto" 
                  className=" input input-accent border-3 rounded-b-xl placeholder:text-white outline-0"
                  onChange={(e) => setValor(e.target.value)}  value={valor}
                  />
                  <button className="btn mt-10">Registrar</button>
            </form>
        </div>

        <div className="bg-cyan-100 w-96 h-96 rounded-2xl p-5 shadow-2xl overflow-scroll">
          <h3 className="font-bold text-red-600 mb-5 text-center ">Gasto recentes</h3>
         <div>
         <ul>
           {listGastos.map((gasto,index) =>(
             
             <li key={index}>
                <div className="card">
                    <p className="card-title text-red-500">{gasto.gasto}</p>
                    <p className="text-red-500">{gasto.valor}</p>
                </div>
                </li>
            ))}
         </ul>
          </div> 
        </div>
    </div>
  )
}

export default Registrar;