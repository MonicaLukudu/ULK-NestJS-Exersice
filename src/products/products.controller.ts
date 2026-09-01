import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { PositiveIntPipe } from 'src/common/pipes/positive-int.pipe';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    create(@Body() createProductDto: CreateProductDto){
        return this.productsService.create(createProductDto);
    }

    @Get(':id')
    findOne(@Param('id', PositiveIntPipe) id: number){
        return this.productsService.findOne(id);
    }
}