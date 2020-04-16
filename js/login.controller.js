var actions = {
    loginFormEmpty: {
        left: {
            label: 'Registrarse',
            callback: function(){
                actionRegistry();
            }
        },
        center: {
            label: '',
            callback: function(){
            }
        },
        right: {
            label: 'Opciones',
            callback: function(){
                actionOptions();
            }
        }
    },
    loginFormWithData: {
        left: {
            label: 'Registrarse',
            callback: function(){
                actionRegistry();
            }
        },
        center: {
            label: 'ENTRAR',
            callback: function(){
                submitLogin();
            }
        },
        right: {
            label: 'Opciones',
            callback: function(){
                actionOptions();
            }
        }
    },
    loginError: {
        left: {
            label: 'Cancelar',
            callback: function(){
                hideAlert();
                updateSoftKey(actions.loginFormWithData);
            }
        },
        center: {
            label: '',
            callback: function(){
                
            }
        },
        right: {
            label: 'Reintentar',
            callback: function(){
                submitLogin();
            }
        }
    },
    registryFormEmpty: {
        left: {
            label: 'Ingresar',
            callback: function(){
                actionLogin();
            }
        },
        center: {
            label: '',
            callback: function(){
                console.log('Enter');
            }
        },
        right: {
            label: 'Opciones',
            callback: function(){
                actionOptions();
            }
        }
    },
    registryFormWithData: {
        left: {
            label: 'Ingresar',
            callback: function(){
                actionLogin();
            }
        },
        center: {
            label: 'Enviar',
            callback: function(){
                submitRegistry();
            }
        },
        right: {
            label: 'Opciones',
            callback: function(){
                actionOptions();
            }
        }
    },
    registrySuccess: {
        left: {
            label: '',
            callback: function(){
                
            }
        },
        center: {
            label: '',
            callback: function(){
                
            }
        },
        right: {
            label: 'Aceptar',
            callback: function(){
                hideAlert();
                actionLogin();
            }
        }
    },
    barOptions: {
        left: {
            label: 'Salir',
            callback: function(){
                exitOptions();
            }
        },
        center: {
            label: 'ELEGIR',
            callback: function(){
                console.log('Enter');
            }
        },
        right: {
            label: '',
            callback: function(){
                console.log('Right');
            }
        }
    }
};
var activeAction;

//FUNCTIONS

function actionLogin(){
    activeAction = 'login';
    resetInputs();
    document.getElementById('password').style.display = 'block';
    document.getElementById('registry-copy').style.display = 'none';
    document.getElementById('title').textContent = 'Iniciar sesión';
    updateSoftKey(actions.loginFormEmpty);
}
function enableSubmitLogin(){
    updateSoftKey(actions.loginFormWithData);
}
function actionRegistry(){
    activeAction = 'registry';
    resetInputs();
    document.getElementById('password').style.display = 'none';
    document.getElementById('registry-copy').style.display = 'block';
    document.getElementById('title').textContent = 'Registro';
    updateSoftKey(actions.registryFormEmpty);
}
function actionOptions(){
    elementBlur();
    updateSoftKey(actions.barOptions);
}
function exitOptions(){
    updateSoftKey(actions.loginFormEmpty);
}
function resetInputs(){
    elementBlur();
    document.getElementById('inputNumber').value = '';
    document.getElementById('inputPassword').value = '';
}
function enableSubmitActions(){
    if(activeAction == 'login'){
        if( document.getElementById('inputNumber').value !== '' && document.getElementById('inputPassword').value !== '' ){
            updateSoftKey(actions.loginFormWithData);
        }else{
            updateSoftKey(actions.loginFormEmpty);
        }
    }else if(activeAction == 'registry'){
        if( document.getElementById('inputNumber').value !== '' ){
            updateSoftKey(actions.registryFormWithData);
        }else{
            updateSoftKey(actions.registryFormEmpty);
        }
    }
}
function submitLogin(){
    elementBlur();
    if( document.getElementById('inputNumber').value == '1111111111'){
        showAlert('error','Error al iniciar sesión','Usuario no registrado o no válido.');
        updateSoftKey(actions.loginError);
    }else{
        window.location.href = '/home';
    }
}
function submitRegistry(){
    elementBlur();
    showAlert('success','Registro exitoso','Inicia sesión y descubre todo lo que puedes hacer dentro de Mi Telcel.');
    updateSoftKey(actions.registrySuccess);
}
function showAlert(type,title,desc){
    document.getElementById('alert-title').textContent = title;
    document.getElementById('alert-desc').textContent = desc;
    addClass(document.getElementById('alert'), 'K-alert--'+type);
    document.getElementById('alert').style.display = 'block';
}
function hideAlert(){
    removeClass(document.getElementById('alert'), 'K-alert--error');
    removeClass(document.getElementById('alert'), 'K-alert--success');
    document.getElementById('alert').style.display = 'none';
}
actionLogin();

//EVENTS

document.getElementById('inputNumber').addEventListener('keyup',function(event){
    enableSubmitActions();
});

document.getElementById('inputPassword').addEventListener('keyup',function(event){
    enableSubmitActions();
});



