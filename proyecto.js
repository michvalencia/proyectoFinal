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

let cantEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes a ingresar:    "))
let estudiantes = []

for (i = 0 ; i < cantEstudiantes ; i++){
    let nombre = prompt(`Ingrese el nombre del estudiante #${i+1}:   `)
    let codigo = parseInt(prompt(`Ingrese el codigo del estudiante #${i+1}:   `))
    let grupo = prompt(`Ingrese el grupo del estudiante #${i+1}:    `)
    let nota1 = parseFloat(prompt(`Ingrese la nota 1 del estudiante #${i+1}:   `))
    let nota2 = parseFloat(prompt(`Ingrese la nota 2 del estudiante #${i+1}:   `))
    let nota3 = parseFloat(prompt(`Ingrese la nota 3 del estudiante #${i+1}:   `))
    let asistencia = parseInt(prompt(`Ingrese el porcentaje de asistencia del estudiante #${i+1}:   `))
    let entregas = parseInt(prompt(`Ingrese el porcentaje de entregas del estudiante #${i+1}:    `))

    let estado = ""

    let promedioNotas = (nota1+nota2+nota3)/3

    if(entregas < 30){
         estado = "critico"
    }else if(promedioNotas >= 4 && asistencia >= 80){
        estado = "excelente"
    } else if(promedioNotas >= 3 && promedioNotas < 4 && asistencia >= 60 && asistencia < 80){
        estado = "aceptable"
    }  else {
        estado = "critico"
    }

    estudiantes[i] = new Est(nombre,codigo,grupo,nota1,nota2,nota3,asistencia,entregas,promedioNotas,estado)
}
console.log(estudiantes);

