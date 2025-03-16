/*
fonction jouer qui pren en parametre les 2 joueurs et un callback
on clique sur le bouton demarrer et le jeu commence
tant que le jeu n'est pas fini
joueur1 un clik sur une case elle affiche croix 
on stocke la case coché dans un tableau
et c'est a joueur 2 de jouer         
et joueur2  clik sur une case elle affiche rond
on stocke la case coché dans un tableau
et c'est a joueur 1 de jouer
fonction callback qui va verifier si le tableau de combinaison gagnantes
sera egale a une des combinaison que l on aura stocker dans un tableau de cases coché par les joueur
si les cases cliquer par joueur 1 sont egale a une des  combinaison gagnantes
 return  joueur 1 a gagné
afficher message de vainqueur
afficher message recommencer 
si recommencer est clicker 
alors redémarrer la fonction
sinon message fin du jeu;
et si les cases cliquer par joueur 2 sont egale au cases gagnante 
return joueur 2 a gagné
afficher message de vainqueur
afficher message recommencer 
si recommencer est clicker 
alors redémarrer la fonction
sinon message fin du jeu;
sinon si les cases cliquer par joueur 1 et joueur 2 ne sont pas egale au combinaison gagnante et qu il n'y a plus de cases a cliquer
return match nul
afficher message recommencer 
si recommencer est clicker 
alors redémarrer la fonction
sinon message fin du jeu;

*/

 

const carrés = Array.from(document.querySelectorAll(".carré"));
let joueur1 = [];
let joueur2 = [];
let click = 0;
let name1 = prompt('Entrez votre nom :');
document.getElementById('name1').textContent = name1;
let name2 = prompt('Entrez votre nom :');
document.getElementById('name2').textContent = name2;


let score1 = 0;
let score2 = 0;

const score1Element = document.getElementById("score1");
const score2Element = document.getElementById("score2");

const combigagnantes = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], 
[0, 3, 6], [1, 4, 7], [2, 5, 8], 
[0, 4, 8], [2, 4, 6]
];

const start = document.getElementById("start");

function jouer() {
carrés.forEach(function(carré, index) {
    carré.addEventListener('click', function() {
        if (!carré.classList.contains('croix') && !carré.classList.contains('rond')) {
            if (click % 2 === 0) {
                carré.classList.add('croix');
                joueur1.push(index);
                setTimeout(() => checkWin(joueur1, "Joueur 1"), 100);
                click++;
            } else {
                carré.classList.add('rond');
                joueur2.push(index);
                setTimeout(() => checkWin(joueur2, "Joueur 2"), 100);
                click++;
            }
        }
    });
});
}

function checkWin(joueur, nomJoueur) {
combigagnantes.forEach(function(combigagnante) {
    if (combigagnante.every(num => joueur.includes(num))) {
        alert(nomJoueur + ' a gagné !');
        if (nomJoueur === "Joueur 1") {
            score1++;
            score1Element.textContent = score1;
        } else {
            score2++;
            score2Element.textContent = score2;
        }
        reset();
    }
});
if (joueur1.length + joueur2.length === 9) {
    alert("Match nul !");
    reset();
}
}

function reset() {
joueur1.length = 0;  
joueur2.length = 0; 
click = 0; 
carrés.forEach(function(carré) {
    carré.classList.remove('croix');
    carré.classList.remove('rond'); 
});
}

start.addEventListener('click', function() {
alert('La partie commence !');
jouer();
reset();
});
   

       
       
        

        
        







    











