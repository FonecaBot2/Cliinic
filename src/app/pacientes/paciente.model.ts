export class Paciente {
    idPersona:String
    nombre: String;
    apellido: String;
    email: String;
    telefono: String;
    ruc: String;
    cedula: String;
    tipoPersona: String;
    fechaNacimiento: Date;
}

export interface getPacientes{
    lista: Paciente[],
    totalDatos: number
}
  