var prompt = require('prompt-sync')()

class Est {
    constructor(nombre,codigo,grupo,nota1,nota2,nota3,asistencia,entregas,promedioNotas,estado) {
        this.nombre = nombre
        this.codigo = codigo
        this.grupo = grupo
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.asistencia = asistencia
        this.entregas = entregas
        this.promedioNotas = promedioNotas
        this.estado = estado
    }
}

let estudiante1 = {
    nombre: 'santiago',
    codigo: 123,
    grupo: 'A',
    nota1: 4,
    nota2: 5,
    nota3: 4,
    asistencia: 80,
    entregas: 100,
    promedioNotas: 4.333333333333333,
    estado: 'excelente'
}

let estudiante2 = {
    nombre: 'sebas',
    codigo: 456,
    grupo: 'B',
    nota1: 4,
    nota2: 3,
    nota3: 4,
    asistencia: 70,
    entregas: 30,
    promedioNotas: 3.6666666666666665,
    estado: 'aceptable'
}

let estudiante3 = {
    nombre: 'miguel',
    codigo: 789,
    grupo: 'A',
    nota1: 3,
    nota2: 2,
    nota3: 5,
    asistencia: 100,
    entregas: 60,
    promedioNotas: 3.3333333333333335,
    estado: 'critico'
}

let estudiante4 = {
    nombre: 'sofia',
    codigo: 198,
    grupo: 'B',
    nota1: 5,
    nota2: 5,
    nota3: 5,
    asistencia: 70,
    entregas: 20,
    promedioNotas: 5,
    estado: 'critico'
}

let estudiantes = [estudiante1, estudiante2, estudiante3, estudiante4]

// let cantEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes a ingresar:    "))

// let estudiantes = []

// for (i = 0 ; i < cantEstudiantes ; i++){
//     let nombre = prompt(`Ingrese el nombre del estudiante #${i+1}:   `)
//     let codigo = parseInt(prompt(`Ingrese el codigo del estudiante #${i+1}:   `))
//     let grupo = prompt(`Ingrese el grupo del estudiante #${i+1}:    `)
//     let nota1 = parseFloat(prompt(`Ingrese la nota 1 del estudiante #${i+1}:   `))
//     let nota2 = parseFloat(prompt(`Ingrese la nota 2 del estudiante #${i+1}:   `))
//     let nota3 = parseFloat(prompt(`Ingrese la nota 3 del estudiante #${i+1}:   `))
//     let asistencia = parseInt(prompt(`Ingrese el porcentaje de asistencia del estudiante #${i+1}:   `))
//     let entregas = parseInt(prompt(`Ingrese el porcentaje de entregas del estudiante #${i+1}:    `))

//     let estado = ""

//     let promedioNotas = (nota1+nota2+nota3)/3

//     if(entregas < 30){
//          estado = "critico"
//     }else if(promedioNotas >= 4 && asistencia >= 80){
//         estado = "excelente"
//     } else if(promedioNotas >= 3 && promedioNotas < 4 && asistencia >= 60 && asistencia < 80){
//         estado = "aceptable"
//     }  else {
//         estado = "critico"
//     }

//     estudiantes[i] = new Est(nombre,codigo,grupo,nota1,nota2,nota3,asistencia,entregas,promedioNotas,estado)
// }
// console.log(estudiantes)

let salir = false 

do {
    console.log("============= MENU =================");
    console.log("1. Ver estado academico de cada estudiante por grupo");
    console.log("2. Filtrar estudiantes en estado critico");
    console.log("3. Cuantos estudiantes tienen sus entregas completas");
    console.log("4. Consultar historial individual de cada estudiante");
    console.log("5. Ver informe general del semestre");
    console.log("6. Salir");

    let opcion = parseInt(prompt("Ingrese la opcion que desea (1-6):    "))

    switch (opcion) {
        case 1: // ESTADO ACADEMICO DE LOS GRUPOS POR SEPARADO
            const filtrarEstado = (estudiantes) => {
                let grupos = {}

                for (i = 0 ; i < estudiantes.length; i++) {
                    let estu = estudiantes[i]
                    let grupoEstu = estu.grupo

                    if(!grupos[grupoEstu]) {
                        grupos[grupoEstu] = []
                    }

                    grupos[grupoEstu].push({
                        nombre: estu.nombre,
                        estado: estu.estado
                    })
                }

                return grupos
            }

            const gruposFiltrado = filtrarEstado(estudiantes)
            console.log("---------Estado academicos de los estudiantes separados por grupo---------");
            console.log(gruposFiltrado);
            

            break;

        case 2: //FILTRAR ESTUDIANTES CRITICOS

            const filtrarCriticos = (estudiantes) => {
                let estuCriticos = []

                for(i = 0; i < estudiantes.length; i++){
                    if(estudiantes[i].estado === "critico"){
                        estuCriticos.push({
                            nombre: estudiantes[i].nombre,
                            codigo: estudiantes[i].codigo,
                            estado: estudiantes[i].estado
                        })
                    }
                }
                return estuCriticos
            }

            console.log("---------Estudiantes en estado critico---------");
            console.log(filtrarCriticos(estudiantes));
            
            break;
        case 3: //ESTUDIANTES CON ENTREGAS COMPLETAS
            const filtrarCompletos = (estudiantes) => {
                let estuCompletos = []

                for(i = 0; i < estudiantes.length; i++){
                    if(estudiantes[i].entregas === 100){
                        estuCompletos.push({
                            nombre: estudiantes[i].nombre,
                            codigo: estudiantes[i].codigo,
                            porcentajeDeEntrega: estudiantes[i].entregas
                        })
                    }
                }
                console.log("Los estudiantes con notas completas son: ", estuCompletos.length);
                console.log(estuCompletos);
            }

            console.log("---------Estudiantes con entregas completas---------");
            filtrarCompletos(estudiantes)
            break;

        case 4: //CONSULTAR ESTUDIANTES POR SEPARADO

            console.log("--------------Lista de estudiantes---------------");
            
            for(i = 0; i < estudiantes.length; i++) {
                console.log("Estudiante #", i+1, estudiantes[i].nombre, ", codigo: ",estudiantes[i].codigo);
            }
            let codigoEstudiante = parseInt(prompt("Ingresa el codigo del estudiante a revisar:    "))

            let estuSeleccionado = estudiantes.filter(estudiante => estudiante.codigo === codigoEstudiante )

            console.log(estuSeleccionado);
            
            break;

        case 5: //INFORME GENERAL   
            console.log("----Cantidad de estudiantes por estado academico------");

            let estudiantesCriticos = estudiantes.filter(estudiante => estudiante.estado === "critico")
            let estudiantesAceptables = estudiantes.filter(estudiante => estudiante.estado === "aceptable")
            let estudiantesExcelentes = estudiantes.filter(estudiante => estudiante.estado === "excelente")

            console.log("Estudiantes excelentes: ", estudiantesExcelentes.length);
            console.log("Estudiantes aceptables: ", estudiantesAceptables.length);
            console.log("Estudiantes criticos: ", estudiantesCriticos.length);
            
            console.log("------Promedio general de cada grupo------");

            let grupoA = estudiantes.filter(estudiante => estudiante.grupo === 'A')
            let grupoB = estudiantes.filter(estudiante => estudiante.grupo === 'B')
            
            const calcPromedio = (grupo) => {
                let suma = 0
                for(i=0; i < grupo.length; i++){
                    suma = suma + grupo[i].promedioNotas
                }
                prom = suma / grupo.length
                return prom
            }

            console.log("Promedio grupo A: ", calcPromedio(grupoA));
            console.log("Promedio grupo B: ", calcPromedio(grupoB));
            
            console.log("-----Porcentaje de estudiantes que requieren intervención-----");
            
            let criticos = estudiantes.filter(estudiante => estudiante.estado === "critico")

            let porcentajeCriticos = (criticos.length/estudiantes.length)*100
            console.log("Porcentaje de estudiantes a intervenir : ", porcentajeCriticos,"%");
            
            console.log("-----Listado estudiantes con bajas entregas-----");

           let bajasEntregas = []

           for(i = 0; i < estudiantes.length; i++){
            if(estudiantes[i].entregas < 30){
                bajasEntregas.push({
                    nombre: estudiantes[i].nombre,
                    codigo: estudiantes[i].codigo,
                    grupo: estudiantes[i].grupo,
                    promedioNotas: estudiantes[i].promedioNotas,
                    asistencia: estudiantes[i].asistencia,
                    entregas: estudiantes[i].entregas,
                })
            }
           }

           console.log(bajasEntregas);
            break;
        case 6:
            salir = true
            break;
        default: console.log("opcion incorecta");
            break;
    }
    
}while(salir === false)

