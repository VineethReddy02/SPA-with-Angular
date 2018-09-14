import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from '../Services/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './Product-list.component.html'
})

export class ProductListComponent implements OnInit {
    pageTitle = 'Product_List';
    imageWidth: 50;
    imageMargin: 2;
    showImage = false;
    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }


    filteredProducts: IProduct[];
    products: IProduct[] = [];
    constructor(private productService: ProductService) {
        }

    performFilter(filterby: string): IProduct[] {
        filterby = filterby.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterby) !== -1);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
        console.log();
    }
    toggleImage(): void {
         this.showImage   = !this.showImage;
    }
}

