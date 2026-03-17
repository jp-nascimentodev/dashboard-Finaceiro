
import { create } from "zustand";


export const gastoStore = create((set)  =>({
    listGastos : JSON.parse(localStorage.getItem("listgastos")),
    addGastos: (data) => set((state) =>{
        const uptade = [...state.listGastos, data]
        localStorage.setItem("listgastos", JSON.stringify(uptade))
        return{listGastos: uptade}
    })


}))