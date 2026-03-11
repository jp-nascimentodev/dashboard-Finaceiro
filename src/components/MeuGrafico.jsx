import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts"
import { dataFinanceira } from "../data/dados"
const MeuGrafico = () => {
  return (
    <div style={{ width: '100%', height: 400, padding: '20px' }}>

        <h2>Fluxo de caixa mensal</h2>

        <ResponsiveContainer>
            <AreaChart data={dataFinanceira}>
                {/* Definindo as cores em degrade */}

                <defs>
                    <linearGradient id="colorSaldo" x1="2" y1="0" x2="0" y2="2">
                        <stop offset="5%" stopColor="#b4a0a0b4" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#1da93d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey= "mes"/>
            <YAxis/>
            <Tooltip/>
            <Area
                type="monotone"
                dataKey= "saldo"
                stroke="#abaaae"
                fillOpacity={1}
                fill="url(#colorSaldo)"
            />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default MeuGrafico