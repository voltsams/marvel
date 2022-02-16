// MOBILE NAV 

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".mobile-nav").classList.add("visible");
})

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".mobile-nav").classList.remove("visible");
})

// ADD 

var btnAdd = document.querySelectorAll(".add");

for (i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click", function() {

        // Annule le comportement par defaut
        event.preventDefault();

        // Ajoute ou enlève la class "focus"
        this.classList.toggle("focus");

        // On vérifie si l'élément contient la class "focus"
        if (this.classList.contains("focus")) {
            this.innerHTML = '<i class="fas fa-cart-plus"></i>Ajouté';
        } else {
            this.innerHTML = '<i class="fas fa-cart-plus"></i>Ajouter';
        }
    })
}

// TRAILER

var btnTrailer = document.querySelectorAll(".trailer");

for (i = 0; i < btnTrailer.length; i++) {
    btnTrailer[i].addEventListener("click", function() {
        
        // Annule le comportement par defaut
        event.preventDefault();

        // On affiche le fond noir et le conteneur de la vidéo
        document.querySelector(".blackBg").style.display = "block";
        document.querySelector(".videoContainer").style.display = "block";

        // On récupèré l'attribut "data-video" présent dans chaque bouton "bande annonce"
        var data = this.getAttribute("data-video");

        // On ajoute le bloc video à l'élément "videoContainer"
        // Seul le code vidéo changera en fonction du bouton sur lequel on clique
        document.querySelector(".videoContainer").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + data + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        
    })
}

// CLOSE TRAILER

document.querySelector(".blackBg").addEventListener("click", function() {
    this.style.display = "none";
    document.querySelector(".videoContainer").style.display = "none";
})

// FILTERS 

document.querySelector("#mj").addEventListener("click", function() {

    // On cache tous les articles
    var article = document.querySelectorAll(".grid article");

    for (i = 0; i < article.length; i++) {
        article[i].style.display = "none";
    }

    // On affiche les films qui correspondent au filtre
    var selection = document.querySelectorAll(".mj");

    for (i = 0; i < selection.length; i++) {
        selection[i].style.display = "block";
    }
})

document.querySelector("#bp").addEventListener("click", function() {

    // On cache tous les articles
    var article = document.querySelectorAll(".grid article");

    for (i = 0; i < article.length; i++) {
        article[i].style.display = "none";
    }

    // On affiche les films qui correspondent au filtre
    var selection = document.querySelectorAll(".bp");

    for (i = 0; i < selection.length; i++) {
        selection[i].style.display = "block";
    }
})

document.querySelector("#em").addEventListener("click", function() {

    // On cache tous les articles
    var article = document.querySelectorAll(".grid article");

    for (i = 0; i < article.length; i++) {
        article[i].style.display = "none";
    }

    // On affiche les films qui correspondent au filtre
    var selection = document.querySelectorAll(".em");

    for (i = 0; i < selection.length; i++) {
        selection[i].style.display = "block";
    }
})

document.querySelector("#sj").addEventListener("click", function() {

    // On cache tous les articles
    var article = document.querySelectorAll(".grid article");

    for (i = 0; i < article.length; i++) {
        article[i].style.display = "none";
    }

    // On affiche les films qui correspondent au filtre
    var selection = document.querySelectorAll(".sj");

    for (i = 0; i < selection.length; i++) {
        selection[i].style.display = "block";
    }
})