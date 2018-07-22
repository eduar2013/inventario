import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit {

  producto: Producto = new Producto();

  categorias = ['Jugetes','Decoracion','Otros'];
  
  submitted = false;

  onSubmit(){
    this.submitted = true;
    console.log(this.producto);
  }

  get diagnostic() { return JSON.stringify(this.producto); }


  constructor() {
    
   }

  ngOnInit() {
  }

}
