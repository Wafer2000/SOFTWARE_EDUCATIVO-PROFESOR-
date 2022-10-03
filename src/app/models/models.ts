export interface Usuarios{
    nombres: string, 
    apellidos: string, 
    email: string,
    password: string, 
    fechanacimiento: string,
    foto: string,
    numidenti: string,
    uid: string,
    tiempo: Date,
    completado1: boolean,
    completado2: boolean,
    completado3: boolean,
    tipo: string
}

export interface PreguntasIns{
    preg: string,
    id: number,
    tiempo: Date
}

export interface Preguntas{
    preg: string,
    id: string,
    num: number,
    tiempo: Date,
    modulo: number
}

export interface OpcionesIns{
    id: string,
    estado: boolean,
    text: string,
    name: string,
    disabled: boolean,
    checked: boolean,
}

export interface Opciones{
    id: string,
    estado: boolean,
    text: string,
    name: string,
    disabled: boolean,
    checked: boolean,
    modulo: number
}

export interface RespuestaIns{
    uid: string,
    nombres: string,
    apellidos: string,
    resp1: string, 
    resp2: string, 
    resp3: string, 
    resp4: string, 
    resp5: string, 
    resp6: string, 
    resp7: string, 
    resp8: string, 
    resp9: string, 
    resp10: string,
    tiempo: Date,
    fecha: string,
    hora: string,
    calif: string
}


export interface Respuestas{
    uid: string,
    nombres: string,
    apellidos: string,
    resp1: string, 
    resp2: string, 
    resp3: string, 
    resp4: string, 
    resp5: string, 
    resp6: string, 
    resp7: string, 
    resp8: string, 
    resp9: string, 
    resp10: string,
    fecha: string,
    hora: string,
    tiempo: Date,
    calif: ''
}

export interface UsuariosIns{
    nombres: string, 
    apellidos: string, 
    email: string,
    password: string, 
    fechanacimiento: string,
    foto: string,
    numidenti: string,
    uid: string,
    tiempo: Date,
    completado?: boolean
}

export interface Temas{
    id: string,
    modulo: number,
    titulo: string,
    contenido: string,
    tiempo: Date
}

export interface RespuestaModulo1{
    id: string,
    uid: string,
    nombres: string,
    apellidos: string,
    resp1Modulo1: string, 
    resp2Modulo1: string, 
    resp3Modulo1: string, 
    resp4Modulo1: string, 
    resp5Modulo1: string, 
    resp6Modulo1: string, 
    resp7Modulo1: string, 
    resp8Modulo1: string, 
    resp9Modulo1: string, 
    resp10Modulo1: string,
    fecha: string,
    hora: string,
    tiempo: Date,
    calif: number
}

export interface RespuestaModulo2{
    id: string,
    uid: string,
    nombres: string,
    apellidos: string,
    resp1Modulo2: string, 
    resp2Modulo2: string, 
    resp3Modulo2: string, 
    resp4Modulo2: string, 
    resp5Modulo2: string, 
    resp6Modulo2: string, 
    resp7Modulo2: string, 
    resp8Modulo2: string, 
    resp9Modulo2: string, 
    resp10Modulo2: string,
    modulo: number,
    fecha: string,
    hora: string,
    tiempo: Date,
    calif: number
}

export interface RespuestaModulo3{
    id: string,
    uid: string,
    nombres: string,
    apellidos: string,
    resp1Modulo3: string, 
    resp2Modulo3: string, 
    resp3Modulo3: string, 
    resp4Modulo3: string, 
    resp5Modulo3: string, 
    resp6Modulo3: string, 
    resp7Modulo3: string, 
    resp8Modulo3: string, 
    resp9Modulo3: string, 
    resp10Modulo3: string,
    modulo: number,
    fecha: string,
    hora: string,
    tiempo: Date,
    calif: number
}

export interface PreguntaEstu{
    id: string,
    estudiante: string,
    pregunta: string,
    respuesta: string,
    calif: number,
    tiempo: Date,
    hora: string,
    fecha: string,
    hresp: string,
    fresp: string,
    estado: boolean,
}

export interface Codigos{
    id: string,
    titulo: string,
    contenido: string,
    tiempo: Date,
    fecha: string,
    hora: string,
    caracte: string
}