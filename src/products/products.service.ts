import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";

export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

@Injectable()
export class ProductsService{
    private products: Product[] =[
        { id: 1, name: 'Keyboard', price: 49.99},
        { id: 2, name: 'Mouse', price: 19.99},
    ];

    private nextId = 3;

    create(createProductDto: CreateProductDto): Product {
        const newProduct: Product = {
            id: this.nextId++,
            ...createProductDto,
        };
        this.products.push(newProduct);
        
        return newProduct;
    }

    findOne(id: number): Product {
        const product = this.products.find( p => p.id === id );

        if(!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        return product;
    }

    findAll(): Product[]{
        return this.products;
    }
}