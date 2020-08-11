///////////////////////// Funciones para el ejercicio 1  //////////////////////////////////
function cambiarH4() {
    document.getElementById("header").innerHTML = "06/04/1998";
}

function cambiarFondo() {
    document.getElementById("header").style.background = "#020122";
    document.getElementById("header").style.color = "white";
}

function alingRight() {
    document.getElementById("div").style.textAlign = "right"
}
function alingLeft() {
    document.getElementById("div").style.textAlign = "left"
}
function alingCenter() {
    document.getElementById("div").style.textAlign = "center"
}

var count = 20;
function increaseText() {
    document.getElementById("div").style.fontSize = `${count}px`;
    count += 5;
}

function hideDiv() {
    document.getElementById("div").style.display = "none"
}

//////////////////////////// Funciones para el ejercicio 2  /////////////////////////////
var count = 0;
var canton;
var cantones = ['Ibarra', 'Antonio Ante', 'Cotacachi', 'Otavalo', 'Pimampiro', 'San Miguel de Urcuquí']

cantones.sort();
console.log(cantones);

function mostrarCantones() {
    let range = cantones.length
    if (count < range) {
        canton = cantones[count]
        document.getElementById("div").innerHTML = `${cantones[count]}`;
        count += 1;
    }
}


function mostrarTodosCantones() {
    let cant = canton;
    document.getElementById('todosCantones').innerHTML = '';

    if (cant !== undefined) {
        for (let i = 0; i < cantones.length; i++) {
            let div = document.createElement('div');
            div.textContent = cantones[i];
            document.getElementById('todosCantones').appendChild(div);

            if (cantones[i] == cant) {
                break
            }
        }
    }
}

// function listarCantones() {

//     for (let i = 0; i < cantones.length; i++) {
//         const li = document.createElement('li');
//         li.innerText = cantones[i]
//         document.getElementById("listaCantones").appendChild(li);
//     }
// }


// utilizando for of
function listarCantones() {
    for (const iterator of cantones) {
        const li = document.createElement('li');
        li.innerText = iterator
        document.getElementById("listaCantones").appendChild(li);
    }
}

// Uilizando for in
function listarCantones() {
    for (const key in cantones) {
        const li = document.createElement('li');
        li.innerText = cantones[key]
        document.getElementById("listaCantones").appendChild(li);
    }
}


////////////////////////////// Funciones para el ejercicio 3  ///////////////////////////////

function createTable() {
    // Agregamos una refenrecia a div
    var div = document.getElementById("div");

    // Creamos un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Creamos las celdas
    for (var i = 0; i < 5; i++) {
        // Refleja el numero de filas
        var fila = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            // Refleja las columnas
            var celda = document.createElement("td");
            var canton = document.createTextNode(cantones[i]);
            celda.appendChild(canton);
            fila.appendChild(celda);
        }
        // agregamos la fila a tblBody
        tblBody.appendChild(fila);
    }

    // posicionamos el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    div.appendChild(tabla);

    tabla.setAttribute("border", "1");
}


function crearParrafo() {
    for (let index = 1; index < cantones.length; index++) {
        const p = document.createElement('p');
        p.innerText = cantones[index]
        p.style.fontSize = `${index * 5}px`
        document.getElementById("parrafo").appendChild(p);
    }
}



/////////////////////  Funciones para el ejercicios 4  ////////////////

function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var aux = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (aux == 0) {
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
            pos++;
        } if ((pos == 350) || (aux !== 0)) {
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
            if (pos == 0)
                clearInterval(id)
            aux++;
            pos--;
        }
    }
}
