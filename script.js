function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert(' [ERRO]   Verifique seus dados e tente novamente! ')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gender = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')


        if (fsex[0].checked){
            gender = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'babygaroto.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'garoto.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src','adultomacho.png')
            }else{
                //idoso  
                img.setAttribute('src','veio.png')
            }
            
        } else if (fsex[1].checked){
            gender = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'babygarota.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'garota.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src','adultofemea.png')
            }else{
                //idoso  
                img.setAttribute('src','veia.png')
            }

        }
        res.innerHTML = `Detectamos ${gender} com ${idade} anos.`
        res.appendChild(img)
    }
}