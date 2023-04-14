function getFicha(){
    let producto = document.getElementById("nom_producto").value
    document.getElementById("resproducto").innerText = producto
    
    let linea = document.getElementById("linea").value
    document.getElementById("resproduct").innerText = linea

    let anterior = document.getElementById("anterior").value
    document.getElementById("resprodu").innerText = anterior

    let actual = document.getElementById("actual").value
    document.getElementById("resprod").innerText = actual

    let modulo = document.getElementById("modulo").value
    document.getElementById("respro").innerText = modulo
}
