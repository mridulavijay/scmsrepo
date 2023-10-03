import { Component, OnInit } from '@angular/core';
import { ProductserveService } from '../productserve.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
products={id:'',
productName:'',
productPrice:0,
productQuantity:0};
  constructor(private serve:ProductserveService) { }

  ngOnInit(): void {
  }
addproducts(){
  console.log(this.products);
this.serve.addproducts(this.products).subscribe((res=>{
  alert('Product added');
}))
}
}
