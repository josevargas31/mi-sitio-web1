function S(){
    let cantidad, valor, valorTotal
    cantidad = document.getElementById("cantidad").value

    valor = document.getElementById("valor").value

    valorTotal = cantidad*valor

    document.getElementById("respuesta").innerHTML = 
    "<div> el valor es "+ valorTotal +"</div>"
}

function Q(){
    let cantidad, valor, valorTotalconDescuento
    cantidad = document.getElementById("cantidad").value

    valor = document.getElementById("valor").value
    
    valorTotalconDescuento = cantidad*valor*15 /100

    document.getElementById("respuesta").innerHTML =
    "<div> el valor es "+ valorTotalconDescuento +"</div>"
}
function C(){
    let cantidad, valor, valorTotalSinDescuento,  valorTotal1 
    cantidad = document.getElementById("cantidad").value

    valor = document.getElementById("valor").value
 
    
    valorTotalSinDescuento = cantidad*valor

    valorTotal1 = valorTotalSinDescuento*50 / 100


    document.getElementById("respuesta").innerHTML =
    "<div> el valor es "+ valorTotal1 +"</div>"
}