export class HorarioExcepcion {
    idHorarioExcepcion!:string
    fechaCadena!: string
    horaAperturaCadena!: string
    horaCierreCadena!: string
    flagEsHabilitar!: string
    idEmpleado!: {
        idPersona: string
    }
    intervaloMinutos!: string
}

export interface getHorarioExcepcion{
    lista: HorarioExcepcion[],
    totalDatos: number
}