const b = document.getElementById("b")
const a = document.getElementById("a")
const c = document.getElementById("c")
// const s = document.getElementById("s")
const btn = document.getElementById("calcular")
const resultado = document.getElementById("result")
const clean = document.getElementById("clean")


// b +- b² -4*a*c
// b + delta
// 
clean.onclick = function(){
    resultado.innerHTML = ""
}

btn.onclick = function() {

    let nb = Number(b.value)
    let na = Number(a.value)
    let nc = Number(c.value)
    var rB = nb * nb // calculando b²
    let neB = -nb // Definindo que o b e negativo originalmente
    var rAC = 4 * na * nc // Calculando 4.a.c

    var result = rB - rAC // Calculando resuldado b² - √4.a.c

    var multiA = 2 * na // Calculando 2.a para divisao 
    var raizQuadrada = Number(Math.sqrt(result)) // Descobrindo raiz quadrda do resultado da conta -4*a*c
    var rPosi = neB + raizQuadrada // calculando -b + √-4*a*c
    var rNegat = neB - raizQuadrada // calculando -b - √-4*a*c

    var  rFP = rPosi / multiA
    var  rFN = rNegat / multiA
 

    isNaN(raizQuadrada) ?  resultado.innerHTML = `<p>O resultado dessa conta e ${result}, ou seja numero negativo nao prossiga a conta. </p>` :
 



    resultado.innerHTML = `Calculando delta Δ... <br>

    <p>Δ = ${nb}² - 4.${na}.${nc}<br>
    <p>Δ = ${rB} - ${rAC}</p>
    <p>Δ = ${result}</p><br>
    <p>Calculando o X1...</p><br>
    <p>X = (${neB} ± √${result}) / 2.${na}</p>
    <p> X = (XI = (${neB} + ${raizQuadrada}) / ${multiA})</p>
    <p>XI = ${rPosi} / ${multiA}</p>
    <p>XI = ${rFP}</p><br>
    <p>Calculando o X2...</p><br>
    <p>X = (${neB} ± √${result}) / 2.${na}</p>
    <p> X = (XI = (${neB} - ${raizQuadrada}) / ${multiA})</p>
    <p>XI = ${rNegat} / ${multiA}</p>
    <p>XI = ${rFN}</p><br>


    
    `
   
    // resultado.innerHTML = `<p>O resultado dessa conta em soma enter o b=${nb} e e raiz quadrada de ${raizQuadrada} é ${rFinall}</p>`
 








}

// Dark Mode

const inputContainer = document.querySelector("input")
const rootElement = document.documentElement

const lightTheme = {
    '--background-color': '#FFF',
    '--text-color': '#1A1A1A',
    '--button-background-color': '#9B8AFB',
}
const darkTheme = {
    '--background-color': '#1A1A1A',
    '--text-color': '#FFF',
    '--button-background-color': '#5925DC',
}
inputContainer.addEventListener('change', function(){
    const isCheckecd = inputContainer.checked

    isCheckecd ? changeTheme(darkTheme) : changeTheme(lightTheme) // Ifternario

})
function changeTheme(theme){
    // Alteracao...

    console.log(theme)
    for (let prop in theme){
        changeProperty(prop, theme[prop])
    }
}
function changeProperty(property, value){
    rootElement.style.setProperty(property,value)
}