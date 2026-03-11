import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line} from "recharts"
import { dataFinanceira } from "../data/dados"

const ComparaDados = () => {
  return (
    <div style={{ width: '100%', height: 400, padding: '20px' }}>

        <h3>Saldo vs gastos</h3>

        <ResponsiveContainer>
            <AreaChart data={dataFinanceira}>
                {/* Definindo as cores em degrade */}

                <defs>
                    <linearGradient id="colorSaldos" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#a7d3a8e6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3f753f" stopOpacity={0}/>
                    </linearGradient>

                    <linearGradient id="colorGasto" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#c40d0db4" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#da3705d2" stopOpacity={0.6}/>
                    </linearGradient>
                </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#848484"/>
            <XAxis dataKey= "mes"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            {/* AREA PARA O SALDO */}
            <Area
                type="monotone"
                dataKey= "saldo"
                stroke="#1c7722"
                fillOpacity={1}
                fill="url(#colorSaldos)"
            />
            {/* LINHA PARA GASTOS */}
            <Area
                type = "monotone"
                dataKey = "gastos"
                stroke = "#ff1900"
                strokeWidth = {3}
                dot = {{r: 6}}
                fill="url(#colorGasto)"
            />
            </AreaChart>

        </ResponsiveContainer>
        </div>
  )
}

export default ComparaDados