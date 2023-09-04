
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    hora = 12
    msg.innerHTML = `Agora são: <strong>${hora}</strong> horas.`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#F3C13A'
        img.src = 'manha.jpg'
    }
    else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#a16752'
        img.src = 'tarde.jpg'
    }
    else {
        document.body.style.background = '#264348'
        img.src = 'noite.jpg'
        
       
    }
}
