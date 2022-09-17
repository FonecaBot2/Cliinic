export class Subcategoria {
    idTipoProducto: number;
    descripcion: string;
    idCategoria: number
  
    constructor(
      idTipoProducto: number,
      descripcion: string,
      idCategoria: number,
    ) {
      this.idTipoProducto = idTipoProducto;
      this.idCategoria = idCategoria;
      this.descripcion = descripcion;
    }
  }
  
  export interface getSubcategorias{
    lista: Subcategoria[];
    totalDatos: number
  }