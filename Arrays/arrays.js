

//example 1
let teste

teste = [1,2,3,4,-5]
let aux = 0

for(let i = 0; i <= teste.length; i++){
    console.log('Valor de aux', aux);
    aux = aux + teste[i]
}


//example 2

let bool = true

boolToWord(bool)

function boolToWord( bool ){
    if(bool === true){
        return 'true'
    }else{
        return 'false'
    }
}



