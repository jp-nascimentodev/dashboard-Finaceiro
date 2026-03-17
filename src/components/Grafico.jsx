import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from "recharts"
import { dataFinanceira } from "../data/dados"
const Grafico = ({data}) => {
  return (
    <div style={{ width: '100%', height: 400, padding: '20px' }}>

        <h2 className="font-bold text-2xl">Fluxo de caixa mensal</h2>

        <ResponsiveContainer>
            <AreaChart data={data}>
                {/* Definindo as cores em degrade */}

                <defs>
                    <linearGradient id="colorSaldo" x1="2" y1="0" x2="0" y2="2">
                        <stop offset="5%" stopColor="#988282b4" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#511b9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey= "gasto"/>
            <YAxis/>
            <Tooltip/>
            <Area
                type="monotone"
                dataKey= "valor"
                stroke="#c10000"
                fillOpacity={1}
                fill="url(#colorSaldo)"
            />
            
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Grafico