let estudiantes= [
    {nombre: "Luis", semestre: 5, nota:15},
    {nombre: "Patricia", semestre: 6, nota:10},
    {nombre: "Johel", semestre: 1, nota:9},
    {nombre: "Paola", semestre: 1, nota:6},
    {nombre: "Daniel", semestre: 5, nota:18},
    {nombre: "José", semestre: 3, nota:20},
    {nombre: "Alejandro", semestre: 5, nota:17},
    {nombre: "Eva", semestre: 4, nota:14},
    {nombre: "Sergio", semestre: 8, nota:1},
    {nombre: "María", semestre: 6, nota:7},
];

let insertarEstudEnPosicion = (estudiantes, nombre, semestre, nota, posicion) =>{
    estudiantes.splice(posicion, 0, {nombre, semestre, nota})
};
insertarEstudEnPosicion(estudiantes, "Mireya", 9, 20, 9);

let salida= document.getElementById("salida");
salida.innerHTML= `Arreglo de estudiantes<br><br>`
estudiantes.forEach((estudiante)=>{
    salida.innerHTML += `Nombre: ${estudiante.nombre}<br> Semestre: ${estudiante.semestre} <br> Nota: ${estudiante.nota}<br><br>`
}) 