function logg (){
    const html = document.documentElement
    html.classList.toggle('luz')

    //primeiro pega a imagem
    const img = document.querySelector("#main img")
//substituir a imagem
    if(html.classList.contains('luz')){
//se tiver light mode, adiciona imagem
    img.setAttribute("src", "img/icone 3.jpg")
}else {  
// se nao tiver light mode manter a imagem nnormal
    img.setAttribute("src", "img/icone4.jpg")
}
}
function mudafoto(foto){
    document.getElementById("main").src = foto;

}


