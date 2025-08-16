// Tu tarea: Sistema de gestión de estudiantes 
// 1. Crea un array de objetos estudiantes (nombre, edad, notas[]) 
// 2. Función para agregar estudiante 
// 3. Función para calcular promedio de un estudiante 
// 4. Función para encontrar el mejor estudiante

function carga_notas(list_nota){
    let notas
    for (let i = 0; i < 5; i++) {
        notas = Number(prompt("ingrese unla nota del "+ i + "er cuatrimestre"))
        while (notas < 0) {
            notas = Number(prompt("ERROR, ingrese la nota adecuadamente"))
        }
        list_nota[i] = notas;
    }
}

function prom_notas(list_nota){
    let prom = 0, acum = 0
    for (let i = 0; i < list_nota.length; i++) {
        acum += list_nota[i]
    }
    prom = acum / list_nota.length
    return prom;
}
function carga_alumnos(alumno,list_nota){
    let name, edades, notas
    name = prompt("Ingrese un nombre\n")
    while (name === "") {
        name = prompt("ERROR, ingrese un nombre de forma correcta\n")
    }
    while (name == "listo"){
        edades = parseInt(prompt("ingrese la edad"))
        while(edades < 0 && edades < 12){
            edades = parseInt(prompt("ERROR, ingrese la edad adecuadamente"))
        }
        carga_notas(list_nota)
        
        alumno.push({
            nombre: name,
            edad: edades,
            nota: list_nota
        })
        
        
        name = prompt("Ingrese un nombre\n")
        while (name === "") {
            name = prompt("ERROR, ingrese un nombre de forma correcta\n")
        }
    }
}

function mejor_estudiante(alumno, list_nota){
    let prom, guardador = 0
    prom = prom_notas(alumno.nota)
    if(prom >= 7){
        guardador = alumno.nombre
    }
    return guardador
}

function agregar_estudiante(alumno){
    let name, edades, notas
    name = prompt("Ingrese un nombre\n")
    while (name === "") {
        name = prompt("ERROR, ingrese un nombre de forma correcta\n")
    }
    edades = parseInt(prompt("ingrese la edad"))
        while(edades < 0 && edades < 12){
            edades = parseInt(prompt("ERROR, ingrese la edad adecuadamente"))
        }
        carga_notas(list_nota)
        
        alumno.push({
            nombre: name,
            edad: edades,
            nota: list_nota
        })
}