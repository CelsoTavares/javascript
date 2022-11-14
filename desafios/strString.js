// Pontos de perguntas
// Faça com que a função QuestionsMarks( str ) pegue o parâmetro str string, que conterá números de um dígito, letras e pontos de interrogação, e verifique se há exatamente 3 pontos de interrogação entre cada par de dois números que somam 10. Se sim, então seu programa deve retornar a string true , caso contrário deve retornar a string false . Se não houver dois números que somam 10 na string, seu programa também deve retornar false .

// Por exemplo: se str for "arrb6???4xxbl5???eee5", seu programa deve retornar trueporque há exatamente 3 pontos de interrogação entre 6 e 4 e 3 pontos de interrogação entre 5 e 5 no final da string.
// Exemplos
// Entrada: "aa6?9"
// Saída: false
// Entrada: "acc?7??sss?3rr1??????5"
// Saída: true
// Tag
// manipulação de stringsprocurandotabela de hashgratuitamente



function QuestionsMarks(str) { 
	var res=false;
	for(var i=0;i<str.length;i++){
		for(var j=i+1;j<str.length;j++){
			if(Number(str[i])+Number(str[j])===10){
				res=true;
				if(str.slice(i,j).split('?').length-1<3){
					return false
				}
			}
		}
	}
	return res;
}
   
// keep this function call here 
QuestionsMarks(readline());