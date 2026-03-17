import React from 'react'
import { gastoStore } from '../../store/gastoStore'
import Grafico from '../../components/Grafico'

const Relatorios = () => {
  

  
  const  {listGastos} = gastoStore()
  const maiorValorGasto =  listGastos.reduce((prev, current) =>
    Number(prev.valor) > Number(current.valor) ? prev : current
  )
  const menoValorGasto = listGastos.reduce((prev, current) =>
    Number(prev.valor) < Number(current.valor) ? prev : current
  )
  console.log(listGastos)
  return (
    <div className=''>
      <h1 className='text-2xl ml-10 mt-5 font-bold'>Gastos ao longo do tempo</h1>
      <div className='flex justify-between items-center gap-15'>
        <div className='bg-emerald-200  flex-3 w-200 h-100 mt-5 ml-10 rounded-box border-2'>
          <Grafico data={listGastos}/>
        </div>

        <div className='card bg-emerald-200 flex-1 text-emerald-900 w-50 h-100 rounded-box border-2'>
          <h1 className='text-center mt-10 font-bold text-2xl '>Maior gasto</h1>
          <p className='text-emerald-700 text-xl mt-10'>{maiorValorGasto.gasto} : R$ {maiorValorGasto.valor}</p>
        </div>

        <div className='card bg-emerald-200 w-50 h-100 flex-1'>
          <h1 className='text-center mt-10 font-bold text-2xl text-emerald-900'>Menor gasto</h1>
          <p className='text-emerald-700 text-xl mt-10'>{menoValorGasto.gasto}: {menoValorGasto.valor}</p>
        </div>

      </div>
    </div>


    
  )
}

export default Relatorios