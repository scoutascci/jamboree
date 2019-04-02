let deferredPrompt;
const btnAdd = document.querySelector('.btn-install');
btnAdd.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    deferredPrompt = e;
    // Bouton invitant l'utilisateur a ajouter a l'ecran d'accueil
    btnAdd.style.display = 'block';
    btnAdd.addEventListener('click', (e) =>{
        btnAdd.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
            });
    });
});

