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

function elementBlur(){
    const currentIndex = document.activeElement.tabIndex;
    const items = document.querySelectorAll('.focusable');
    const targetElement = items[currentIndex];
    if(currentIndex != -1)
        targetElement.blur();
}

document.addEventListener('keydown', handleKeyDown);

function inputsUiEvents(){
    var inputs = document.querySelectorAll('.focusable');
    for (var i = 0 ; i < inputs.length; i++) {
        inputs[i].addEventListener("focus", function(event){
            addClass(event.target.parentNode, 'K-form-group--focus');
        });
        inputs[i].addEventListener("blur", function(event){
            removeClass(event.target.parentNode , 'K-form-group--focus');
        });
    }
}

inputsUiEvents();

function hasClass(el, className){
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className){
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className){
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
