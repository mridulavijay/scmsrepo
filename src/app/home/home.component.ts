import { Component, OnInit } from '@angular/core';
import { ProductserveService } from '../productserve.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products:any;
  constructor(private serve:ProductserveService ) { }

  ngOnInit(): void {
   this.serve.getProducts().subscribe((res=>{
    this.products=res;
   }))
  }

}
