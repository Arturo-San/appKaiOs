var actions = {
    homeInit: {
        left: {
            label: 'Salir',
            callback: function(){
                logOut();
            }
        },
        center: {
            label: 'ELEGIR',
            callback: function(){
            }
        },
        right: {
            label: 'Opciones',
            callback: function(){
                
            }
        }
    }
};

//FUNCTIONS

function logOut(){
    window.location.href = '/';
}

updateSoftKey(actions.homeInit);