
function contando(){
   tempo = setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) - 1;
        if(soma === 0){
            parar();
            document.getElementById("tempo").innerHTML = 'zero'; 
        }
        else{


            document.getElementById("tempo").innerHTML = soma;
        }
    },1000)
}

function parar(){
    clearInterval(tempo);
}

