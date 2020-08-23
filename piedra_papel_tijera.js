var piedra = 1
var papel = 2
var tijera = 3
var rondas = 0
var contar_ganadas = 0
var contar_perdidas = 0
var respuesta_pc
var respuesta_jugador
var img_piedra = '<img src="./piedra.jpg"  width="200px" height="200px" alt="Piedra"></img>'
var img_papel = '<img src="./papel.jpg"  width="200px" height="200px" alt="Papel"></img>'
var img_tijera = '<img src="./tijera.jpg"  width="200px" height="200px" alt="Tijera"></img>'
var numero_de_rondas = ""
var algo

function validar_rondas() {
    algo = document.getElementById("rondas")

    if (numero_de_rondas < 1 || numero_de_rondas > 10) {
        document.getElementById("modal_rondas").className = "modal open hide"
        validar_rondas()
        algo.value = numero_de_rondas
        console.log(numero_de_rondas)
    }
    else {
        document.getElementById("modal_rondas").className = "modal open hide"
        algo.value = numero_de_rondas
        console.log(numero_de_rondas)
    }
}

function cambiar_ubicacion() {
    window.location.assign("./piedra_papel_tijera.html")
}

function aleatorio() {
    respuesta_pc = Math.floor(Math.random() * 3) + 1
}

function comprobar() {
    if (respuesta_jugador != respuesta_pc) {
        if (respuesta_jugador == 1 && respuesta_pc == 3 || respuesta_jugador == 2 && respuesta_pc == 1 || respuesta_jugador == 3 && respuesta_pc == 2) {
            console.log("Has ganado")
            contar_ganadas++
        }
        else {
            console.log("Has perdido")
            contar_perdidas++
        }
    }
    else {
        console.log("Han empatado")
    }
}

function resultado() {
    rondas++
    if (rondas == numero_de_rondas) {
        //setTimeout(function () { location.reload(); }, 1000)
        if (contar_ganadas > contar_perdidas) {
            document.getElementById("ganador").innerText = "Felicitaciones, has ganado la partida"
            document.getElementById("info_de_partida").innerText = "Has ganado " + contar_ganadas + " a " + contar_perdidas
            document.getElementById("modal1").className = "modal open show"
            console.log("Has ganado la partida " + contar_ganadas + " a " + contar_perdidas)
        }
        else {
            if (contar_perdidas > contar_ganadas) {
                document.getElementById("ganador").innerText = "Lo siento, has perdido la partida"
                document.getElementById("info_de_partida").innerText = "Has perdido " + contar_perdidas + " a " + contar_ganadas
                document.getElementById("modal1").className = "modal open show"
                console.log("Has perdido la partida " + contar_perdidas + " a " + contar_ganadas)
            }
            else {
                document.getElementById("ganador").innerText = "Lo siento, has empatado la partida"
                document.getElementById("info_de_partida").innerText = "Has empatado " + contar_ganadas + " a " + contar_perdidas
                document.getElementById("modal1").className = "modal open show"
                console.log("Has empatado la partida " + contar_ganadas + " a " + contar_perdidas)
            }
        }
    }
}

function eligio_piedra() {
    respuesta_jugador = 1
    aleatorio()
    comprobar()
    resultado()
    mostrar_respuestas()
    imprimir_tablero()
}

function eligio_papel() {
    respuesta_jugador = 2
    aleatorio()
    comprobar()
    resultado()
    mostrar_respuestas()
    imprimir_tablero()
}

function eligio_tijera() {
    respuesta_jugador = 3
    aleatorio()
    comprobar()
    resultado()
    mostrar_respuestas()
    imprimir_tablero()
}

function mostrar_respuestas() {
    document.getElementById("ppt").className = "imagenes center hide"
    imprimir_respuesta_jugador()
    document.getElementById("respuesta").innerHTML += "<h1>VS</h1>"
    imprimir_respuesta_pc()
    setTimeout(function () {
        document.getElementById("ppt").className = "imagenes center"
        document.getElementById("respuesta").innerText = ""
    }, 2500)
}

function imprimir_respuesta_jugador() {
    if (respuesta_jugador == 1) {
        document.getElementById("respuesta").innerHTML = img_piedra
    }
    else {
        if (respuesta_jugador == 2) {
            document.getElementById("respuesta").innerHTML = img_papel
        }
        else {
            document.getElementById("respuesta").innerHTML = img_tijera
        }
    }
}

function imprimir_respuesta_pc() {
    if (respuesta_pc == 1) {
        document.getElementById("respuesta").innerHTML += img_piedra
    }
    else {
        if (respuesta_pc == 2) {
            document.getElementById("respuesta").innerHTML += img_papel
        }
        else {
            document.getElementById("respuesta").innerHTML += img_tijera
        }
    }
}

function imprimir_tablero() {
    document.getElementById("contar_jugador").innerText = contar_ganadas
    document.getElementById("contar_pc").innerText = contar_perdidas
}

function seguir_jugando() {
    document.getElementById("modal1").className = "modal open hide"
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});