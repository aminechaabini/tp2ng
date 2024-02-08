import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable, map} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
   productList: Observable<any[]>;
  constructor(private productService: ProductsService)
  {}
  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }
  loadMoreProducts(){
    this.productService.getMoreProducts().subscribe({
      next: (newProducts) => {
        if (newProducts.length === 0) {
          alert('no more products to show!')
        } else {
          this.productList = this.productList.pipe(
            map((existingProducts) => [existingProducts, newProducts])
          );
        }
      }
  });
}
}
