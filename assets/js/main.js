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
            node.addEventListener('click', callBack);
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
        var action = e.target;
        $('.highlighted').removeClass('highlighted');
        action.classList.add('highlighted');
    }

    
    var displayTargetContent = function(e) {
        var action = e.target;
        var target = action.dataset.target;
        var targetClass = '.content__' + target;
        $('.active').class('content--none');
        $('.active').removeClass('active');
        $(targetClass).removeClass('content--none');
        $(targetClass).class('active');
    }

    $('.action').click(highlightActions);
    $('.action').click(displayTargetContent);
}

window.onload = initialize();