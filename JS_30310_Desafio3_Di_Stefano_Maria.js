/*Primer entrega del proyecto final en Javascript, comisión 30310 por María Di Stefano 

El código acontinuación contine el simulador entregado previamente, con 
las modificaciones de acuerdo a las siguientes consignas:

"1) Codificar la funcionalidad inicial del simulador. 
 2) Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas
 por el usuario, procesamiento esencial del simulador y notificación de resultados en 
 forma de salida.
- Capturar entradas mediante prompt().
- Declarar variables y objetos necesarios para simular el proceso seleccionado.
- Crear funciones y/o métodos para realizar operaciones (suma, resta, 
 concatenación, división, porcentaje, etc).
- Efectuar una salida, que es el resultado de los datos procesados, la cual puede 
 hacerse por alert() o console.log()."

*/
/*Creo una CLASE Estudiante que contiene los datos UN estudiante y muestra su promedio
A partir de la clase se instanciaran los alumnos que seran almacenados en un array */
class Estudiante {

    constructor (id, nombre, apellido, promedio, calificacion){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.promedio = promedio;
        this.calificacion = calificacion;

    }
    mostrarPromedio() { alert("Hola " + this.nombre + 
                                  " " + this.apellido +  
                  ". Tu promedio es: " + this.promedio +
                  ". " + this.calificacion)
    };
}
//Inicio un array vacío para alojar a los estudiantes
let estudiantes = []
alert("¡Bienvenido!");
let cantAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos a cargar:"));

//Inicio un ciclo for para tomar los datos del alumno mediante prompt
for(let i  = 1; i <= cantAlumnos; i++){
    let alumnoNombre = prompt("Por favor ingrese el nombre del alumno:");
    let alumnoApellido = prompt("Por favor ingrese el apellido:");
    //Instancio una variable local que aloje las notas para luego calcular el promedio
    let notaFinal = 0;
    //Inicio otro ciclo for para que ingresen las notas mediante prompt 
    for(let a = 1; a <= 3; a++){
        let nota = parseInt(prompt("Ingrese la nota " + a));
        //Le sumo a la variable la nueva nota ingresada
        notaFinal += nota;
    }
    //Calculo el promedio dividiendo la suma por la cantidad de notas
    notaFinal /= 3;
    //Utilizo el método Math para redondear el promedio obtenido
    notaFinal = Math.round(notaFinal);
    //Instancio una nueva variable para definir si el alumno aprobó o no
    let aprobado
    if (notaFinal >= 6){
        aprobado = "¡Muy bien! Aprobaste."
    } else {
       aprobado = "Hay que estudiar más, estás desaprobado."
    }

    //Instancio un nuevo objeto Estudiante donde cargo todos los datos ingresados
    let alumno = new Estudiante(i, alumnoNombre, alumnoApellido, notaFinal, aprobado);
    console.log(alumno);
    //Hago uso de la función "mostrarPromedio" para comunicarle sus datos al alumno 
    alumno.mostrarPromedio();
    //Utilizo el método push para añadir los datos dentro de un array
    estudiantes.push(alumno);
    //Hago uso de DOM para mostrar los datos ingresados y resultados en pantalla
    let clase = document.createElement("div");
    clase.innerHTML = `<h4> ID: ${alumno.id}</h4>
                       <p> Alumno: ${alumno.nombre} ${alumno.apellido}</p>
                       <p> Tu promedio es: ${alumno.promedio}</p>
                       <b> Tu situación final: ${alumno.calificacion}</b>`;
 document.body.appendChild(clase);
}

console.log(estudiantes);

    
