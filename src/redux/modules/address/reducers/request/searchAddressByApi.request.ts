import { IAddress } from "./../../dto/Address.dto";
import axios from "axios";

interface IResponse {
  bairro: string;
  cep: string;
  localidade: string;
  logradouro: string;
  uf: string;
  ibge: string;
}

export async function searchAddressByApi(zipCode: string): Promise<IAddress | void> {
    try {
        const { data } = await axios.get<IResponse>(
          `https://viacep.com.br/ws/${zipCode.replace(/[^0-9]/g, "")}/json/`
        );
      
        return {
          address: data.logradouro,
          city: data.localidade,
          district: data.bairro,
          state: data.uf,
          complement: "",
          identifier: "",
          id: parseInt(data.ibge),
          zipCode: data.cep.replace(/[^0-9]/g, ""),
        } as IAddress;
    } catch (error:any) {
        console.error(error.message)
    }
}
