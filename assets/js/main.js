var initialize = function(){
    
    let Utils = function(selector){

        this.node = document.querySelectorAll(selector) || document.querySelector(selector);

        let addClass = (elementClass) => {
            let element = getElement(elementClass);
            
            if(element)
                element.classList.add(newClass);
            
            console.log("The given class does not exists");
            return null;
        }

        let removeClass = (elementClass) => {
            let element = getElement(elementClass);
            element.classList.remove(oldClass);
        }

        return {
            addClass: (elementClass, newClass) => addClass(elementClass, newClass),
            removeClass: (elementClass, newClass) => removeClass(elementClass, newClass),
            getElement: (elementDescriptor) => getElement(elementDescriptor),
            getElements: (elementDescriptor) => getElements(elementDescriptor)
        }
    }

    let MainPage = function() {

        let init = () => {

        }
        
        return {
            init: () => init()
        }

    }

    const utils = Utils();
    const mainPage = MainPage();

    mainPage.init();
    
}

window.onload = initialize();