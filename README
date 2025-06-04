# Descripcion del codigo

Este codigo representa un sistema de tratamiento de datos, en este caso "Datos estudiantiles" en donde podemos obtener diferentes tipos de informacion, como lo son:

En el sistema se puede consultar:

- Ver el estado académico de cada estudiante por grupo.
- Filtrar estudiantes en estado crítico.
- Saber cuántos estudiantes tienen todas sus entregas completas.
- Consultar el historial individual de cada estudiante.

Se puede visualizar un informe que muestre el resumen al final del semestre:

- Cantidad de estudiantes por estado académico.
- Promedio general del grupo.
- Porcentaje de estudiantes que requieren intervención.
- Listado de estudiantes que no entregaron más del 30% de las actividades.

El sistema debe cumplir las siguientes validaciones:

- Las notas deben estar entre 0 y 5.
- La asistencia debe estar entre 0% y 100%.
- La cantidad de entregas debe estar en relación con la cantidad total
programada (por ejemplo, 10 talleres en total).


El codigo inicia con un "for" que sirve para ingresar la informacion de los estudiantes que la persona necesite.

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
    console.log(estudiantes)

Despues de esto nos arroja un menu de multiple seleccion el cual se despliega gracias al comando "switch" (case 1, case 2, case 3, case 4, case 5 y case 6)




## Comandos utilizados

- class
- for
- switch
- while
- do while
