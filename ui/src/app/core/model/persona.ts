export class Persona{
    id:number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    sexo: string;
    
    //Formas de Comunicacion
    email: string;
    telefono: number;
    movil: number;
    fax: number;

    //Documento
    tipoDocumento: string;
    documento: number;

    //Ubicacion: Direccion, localidad, provincia, pais
    callePrincipal: string;
    calleSecundaria: string | null;
    localidad: string;
    codigoPostal: number;
    provincia: string;
    pais: string;

    //Estudios generales
    titulo: string;
    
    //Trabajo
    puesto: string;

}