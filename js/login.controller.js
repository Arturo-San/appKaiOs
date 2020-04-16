updateSoftKey({
    left: {
        label: 'Left text',
        callback: function(){
            console.log('Left');
        }
    },
    center: {
        label: 'Center text',
        callback: function(){
            console.log('Enter');
        }
    },
    right: {
        label: 'Right text',
        callback: function(){
            console.log('Right');
        }
    }
});