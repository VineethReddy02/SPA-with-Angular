import { Injectable } from '@angular/core';

import { IProduct } from '../Products/products';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    getProducts(): IProduct[] {
        return [
            {
                productId: 101,
                productName: 'Play Station-3',
                productCode: 'PS3',
                releaseDate: 'April 1, 2018',
                description: 'High Performance Gaming console',
                price: 11.55,
                starRating : 2.7,
                imageUrl: '../../Products/images/ps4.jpg',
              },
              {
                productId: 102,
                productName: 'XBOX',
                productCode: 'XBX 1',
                releaseDate: 'January 31, 2018',
                description: 'Microsoft one of the best gaming console',
                price: 35.95,
                starRating: 4.6,
                imageUrl: 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
              },
            ];
    }
}
