var initialize = function(){
    
    let Utils = function(){

        let getElement = (elementDescriptor) => {
            return document.querySelector(elementDescriptor);
        }

        let getElements = (className) => {
            return document.querySelectorAll(className);
        }

        let addClass = (elementClass, newClass) => {
            let element = getElement(elementClass);
            
            if(element)
                element.classList.add(newClass);
            
            console.log("The given class does not exists");
            return null;
        }

        let removeClass = (elementClass, oldClass) => {
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

        let highlighter = utils.getElement(".highlighter");
        let currentSectionClass = ".overview";

        let highlightAction = (event) => {
            
            let highlighted = event.toElement ? event.toElement : event;

            let highlightedWidth = highlighted.offsetWidth;
            let highlightedHeight = highlighted.offsetHeight;

            let highlightedTop = highlighted.offsetTop;
            let highlightedLeft = highlighted.offsetLeft;
            let highlighterLeft = highlighter.offsetLeft;

            highlighter.style.width = highlightedWidth + "px";
            highlighter.style.height = highlightedHeight + "px";
            
            highlighter.style.top = highlightedTop + "px";
            highlighter.style.left = highlightedLeft + "px";

        }

        let toggleSection = (event) => {

            let action = event.toElement;
            let sectionClass = action.innerText;

            let selectedSection = '.' + sectionClass.toLowerCase();

            utils.addClass(currentSectionClass, "hide");
            utils.removeClass(currentSectionClass, "fade-text");
            utils.removeClass(selectedSection, "hide");
            utils.addClass(selectedSection, "fade-text");

            currentSectionClass = selectedSection;

        }

        let addHoverListener = () => {
            
            let actions = utils.getElements('.action');

            for (action of actions) {
                action.addEventListener('click', highlightAction);
                action.addEventListener('click', toggleSection);
            }
        }

        let init = () => {

            let highlighted = utils.getElement(".highlighted");

            highlightAction(highlighted);
            addHoverListener();
        
        }
        
        return {
            init: () => init()
        }

    }

    const utils = Utils();
    const mainPage = MainPage();

    mainPage.init();
    
}

window.onload(initialize());