function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var resultado = document.getElementById('resultado')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Preencha os campos corretamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'bebemenino.jpg')
            }else if(idade <= 21){
                //adolescente
                img.setAttribute('src', 'jovemM.jpg')
            }else if(idade <= 40){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            }else{
                //velho
                img.setAttribute('src', 'velho.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'bebemenina.jpg')
            }else if(idade <= 21){
                //adolescente
                img.setAttribute('src', 'jovemF.jpg')
            }else if(idade <= 40){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            }else{
                //velha
                img.setAttribute('src', 'velha.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        resultado.appendChild(img)
    }
}