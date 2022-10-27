function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `São exatamente ${horas} horas`
    if (horas >= 0 && horas <12) {
        img.src = 'manha.png'
    } else if(horas >=12 && horas <18){
        img.src = 'tarde.png'
    } else {
        img.src = 'noite.png'
    }
    
}