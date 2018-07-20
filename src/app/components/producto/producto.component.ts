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
  }

  get diagnostic() { return JSON.stringify(this.producto); }


  constructor() {
    this.producto.nombre = 'Pista de carreras Cars';
    this.producto.precioDeCompra = 59900;
    this.producto.fechaDeCompra = new Date();

    console.log(this.producto);
   }


  ngOnInit() {
  }

}
