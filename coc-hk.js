var _helper = {
    activePanel: null,

    open: function(panel) {
        App.unityInstance.SendMessage('XmlLayout', 'Open' + panel);
        this.activePanel = panel;
    },

    close: function() {
        App.unityInstance.SendMessage('XmlLayout', 'Close' + this.activePanel);
        this.activePanel = null;
    },

    toggle: function(panel) {
        if (this.activePanel == panel) {
            this.close();
            return;
        }
        this.open(panel);
    },
    
    startOver: function() {
        if (this.activePanel) this.close();
        App.unityInstance.SendMessage('GameManager', 'StartOver');
    }
};

document.addEventListener('keyup', (e) => {        
    if (e.code == 'KeyI') {
        _helper.toggle('Inventory');
        return;        
    }
    if (e.code == 'KeyE') {
        _helper.toggle('Equipment');
        return;
    }
    if (e.code == 'KeyM') {
        _helper.toggle('Map');
        return;
    }
    if (e.code == 'KeyL') {
        _helper.toggle('CombatLog');
        return;
    }
    if (e.code == 'KeyY') {
        _helper.startOver();
        return;
    }
});
