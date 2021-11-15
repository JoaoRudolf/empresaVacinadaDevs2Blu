import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read3',
  templateUrl: './product-read3.component.html',
  styleUrls: ['./product-read3.component.css']
})
export class ProductRead3Component implements OnInit {

 
  displayedColumns = ['name', 'price', 'segmento', 'bairro']

  products: Product[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
