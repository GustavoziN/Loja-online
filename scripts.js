function abrirPerfil() {
   let abrir =  document.getElementById('card-profile')
    //verficar se o display é none ou block
   if(abrir.style.display === "block") {
    abrir.style.display = "none"
    abrir.classList.add("profile-animation")
    

   } else {
    abrir.style.display = "block"
    abrir.style.border = "2px solid #F64281"
    abrir.style.position = "absolute"
    
  
   }

}


