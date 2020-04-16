const softkeyCallback = {
    left: function() {},
    center: function() {},
    right: function() {}
};

function handleKeyDown(evt) {
    switch (evt.key) {
        case 'SoftLeft':
        case 'Shift':
            // Action case press left key
            softkeyCallback.left();
            break;
        case 'SoftRight':
        case 'Alt':
            // Action case press right key
            softkeyCallback.right();
            break;
        case 'Enter':
            // Action case press center key
            softkeyCallback.center();
            break;
        case 'ArrowUp':
            nav(-1);
            break;
        case 'ArrowDown':
            nav(1);
            break;
        case 'ArrowRight':
            nav(1);
            break;
        case 'ArrowLeft':
            nav(-1);
            break;
    }
};

function updateSoftKey(props) {
    const keys = Object.keys(props);

    keys.forEach(function(key) {
        const button = document.getElementById('softkey-' + key);
        button.textContent = props[key].label;
        softkeyCallback[key] = props[key].callback;
    });
}

function nav (move) {
    const currentIndex = document.activeElement.tabIndex;

    var next = currentIndex + move;
    const items = document.querySelectorAll('.focusable');

    if(currentIndex == -1 && move == -1){
        next = 0;
    }else if(currentIndex == 0 && move == -1){
        next = items.length - 1;
    }else if( currentIndex == (items.length - 1) && move == 1 ){
        next = 0;
    }else{
        next = currentIndex + move;
    }
    const targetElement = items[next];

    targetElement.focus();
}

document.addEventListener('keydown', handleKeyDown);

formContainer = document.getElementById('form');

document.querySelectorAll('.focusable').forEach(function(element){
    element.addEventListener("focus", function(event){
        event.target.parentNode.classList.add('K-form-group--focus');
    });
    element.addEventListener("blur", function(event){
        event.target.parentNode.classList.remove('K-form-group--focus');
    });
});

