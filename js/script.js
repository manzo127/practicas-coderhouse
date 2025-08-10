function dividir(num1, num2){
    let div = 0
    div = num1 / num2
    return div;
}

function sumar(num1, num2){
    let suma = 0
    suma = num1 + num2
    return suma;
}

function bucle_de_operaciones(){
    let opcion, num1, num2, divisor = 0, sumador = 0;
    alert("Saludos ingrese un numero dependiendo de la opcion")
    opcion = Number(prompt("ingrese una opcion, 1-suma, 2-divicion"))
    while(opcion < 0){
        opcion = prompt("ERROR, ingrese una opcion, 1-suma, 2-divicion")
    }
    while (opcion > 0){
        if(opcion == 1){
            num1 = Number(prompt("ingrese el primer numero"))
            num2 = Number(prompt("ingrese el segundo numero"))
            sumador = sumar(num1, num2)
            console.log("el resultado de la suma es: ",sumador)
            break;
        }else if(opcion == 2){
            num1 = Number(prompt("ingrese el primer numero"))
            num2 = Number(prompt("ingrese el segundo numero"))
            divisor = dividir(num1, num2)
            console.log("el resultado de la divicion es: ",divisor)
            break;
        }
        
    }
}


bucle_de_operaciones()
