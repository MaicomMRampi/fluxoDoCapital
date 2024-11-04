"use client";
import { api } from "@/lib/api";
async function ControleMensal(data: string, token: any | undefined) {
    console.log("🚀 ~ ControleMensal ~ data", data)
    const response = await api.post(`/controleorcamento`, {
        data: data,
        id: token,
    });
    console.log("🚀 ~ ControleMensal ~ response", response)


    return response.data; // Retorno de exemplo
}


export default ControleMensal