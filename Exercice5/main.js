// Fonction pour gérer l'événement de redimensionnement de la fenêtre
function gestionnaireDeRedimensionnement() {
    // Récupérer la largeur actuelle de la fenêtre
    var largeurFenetre = window.innerWidth;

    // Vérifier si la largeur est inférieure à 300 pixels
    if (largeurFenetre < 300) {
        // Afficher une alerte
        alert("La largeur de la fenêtre est inférieure à 300 pixels !");
    }
}

// Ajouter un écouteur d'événement pour le redimensionnement de la fenêtre
window.addEventListener("resize", gestionnaireDeRedimensionnement);

// Appeler la fonction de gestion de redimensionnement une fois au chargement initial
gestionnaireDeRedimensionnement();
