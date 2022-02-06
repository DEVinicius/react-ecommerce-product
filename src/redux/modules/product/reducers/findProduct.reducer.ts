import { IProduct } from './../dto/product.dto';
export function findProductReducer(id: number) {
    return { 
        id: 1,
        product_name: "Máquina de Lavar",
        brand: {
            brand_name: "Consul"
        },
        originalPrice: "125",
        promotionPrice: "150",
        shopkeeper: { 
            name: "Vinicius Pereira de Oliveira"
        }
    } as IProduct
}