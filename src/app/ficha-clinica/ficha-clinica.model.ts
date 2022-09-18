export class FichaClinica {
    idFichaClinica: number;
    fechaHora: String;
    fechaHoraCadena:String;
    motivoConsulta: String;
    diagnostico: String;
    tratamiento: String;
    observacion: String;
    idEmpleado: any;
    idCliente: any;
    idTipoProducto: any;
}

export class getFichaClinica{
    lista: FichaClinica[];
    totalDatos: number
}