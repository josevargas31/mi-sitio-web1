function dolar(){
    let cantidad = document.getElementById("cantidad").value
    let resultado = document.getElementById("resultado")
    let descuento = (cantidad / 4000)
    let diferencia = descuento * 0.10
    let nuevototal = descuento - diferencia
    resultado.innerText = nuevototal
}

function euro(){
    let cantidad = document.getElementById("cantidad").value
    let resultado = document.getElementById("resultado")
    let descuento = (cantidad / 3500)
    let diferencia = descuento * 0.12
    let nuevototal = descuento - diferencia
    resultado.innerText = nuevototal
}

function yuan(){
    let cantidad = document.getElementById("cantidad").value
    let resultado = document.getElementById("resultado")
    let descuento = (cantidad / 35)
    let diferencia = descuento * 0.14
    let nuevototal = descuento - diferencia
    resultado.innerText = nuevototal
}