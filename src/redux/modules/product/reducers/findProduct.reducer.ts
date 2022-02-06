import { IProduct } from './../dto/product.dto';
export function findProductReducer() {
    console.log("ESTAMOS AQUI")
    return { 
        id: 1,
        product_name: "Máquina de Lavar"
    } as IProduct
}