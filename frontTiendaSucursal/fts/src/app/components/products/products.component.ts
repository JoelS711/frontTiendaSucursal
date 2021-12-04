import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private objetohttp: HttpClient,private principalservice:ProductsService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  //variable receptora de documentos
  res: any;
  //variable contenedora de contenidos
  contenido: any;
  //url api get
  urlapiGET: string = "http://localhost:8080/api/products";

  //aliminando objeto revisor de cambios de la tabla
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



  ///////////////// METODOS ANGULAR /////////////////////////////

  //FUNCIÓN DE EJECUCIÓN ANTES DE LA CARGA DE LA PAGINA
  ngOnInit(): void {

    this.res = this.objetohttp.get(this.urlapiGET);
    //suscribe el archivo json y lo convierte   
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log(this.contenido);
      this.dtTrigger.next(this.dtOptions);
    });

    //Opciones especiales de la tabla, localización y caracteristicas
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [{
        title: 'Code',
      }, 
      {
        title: 'Name',
      },
      {
        title: 'NIT Provider',
      },
      {
        title: 'PurchasePrice',
      },
      {
        title: 'Iva',
      },
      {
        title: 'Sale Price',
      },
    ],
      pageLength: 10,
      responsive: true,
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero   ",
          previous: "Anterior   ",
          next: "Siguiente    ",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    };
  }




  res2: any;

  resultados:any;
  file!:File;
//Solo se dejara guardar un archivo y si el archivo no es, se puede volver a cargar el nuevo en memoria y se elimina el viejo
  onChange(event:any){
    this.file=event.target.files[0];
  } 

  async onUpload(){
    this.principalservice.deleteProduct();
    this.resultados= await this.principalservice.upload(this.file);
  }

}


