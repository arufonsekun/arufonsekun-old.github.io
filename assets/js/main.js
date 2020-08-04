class Utils { 

    class = function(className) {
        if (className) {
            this.forEach(node => {
                node.classList.add(className);
            });
            return;
        }
        let classList = null;
        this.forEach(node => {
            classList = node.className.split(' ');
        });
        return classList;
    }

    removeClass = function(className) {
        this.forEach((node) => {
            node.classList.remove(className);
        });
    }

    click = function(callBack){
        this.forEach((node) => {
            node.onclick = callBack;
        });
    }

    constructor(){ 
        
        NodeList.prototype.class = this.class;
        NodeList.prototype.removeClass = this.removeClass;
        NodeList.prototype.click = this.click;

        return (selector) => {
            return document.querySelectorAll(selector);
        } 
    } 
}

var initialize = function(){

    const $ = new Utils();

    var highlightActions = function(e){
        var clickedNode = e.target;
        $('.highlighted').removeClass('highlighted');
        clickedNode.classList.add('highlighted');
    }

    $('.action').click(highlightActions);
}

window.onload = initialize();