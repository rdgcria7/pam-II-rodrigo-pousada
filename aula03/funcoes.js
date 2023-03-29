function msgteste (){
    console.log("Funcionou essa bomba kk")
}

msgteste()

function msgtesteargumento (param){
    console.log("O parametro passado foi:", 
                param, "e o tipo dele é :", typeof param)
}

msgtesteargumento("Slv bb")
msgtesteargumento(69)

function soma (n1, n2){
    let result = 0
    try{
        return result = n1 + n2
        return typeof result !== Number ? result : "Erro"
    } catch (e){ 
        return e 
    }
}

console.log(soma (3,6))

console.log(soma (7,8))

const funcaoArrow = () => {
    console.log("isso é uma função arrow kkkk")
}

funcaoArrow()