

function collapse(e){
    let accordionBtn=e.target;
    let accordion=accordionBtn.closest(".accordion");

    if(!accordionBtn.classList.contains("collapsed")){ //if the selected item is the opened one:
        accordionBtn.classList.add("collapsed");
        accordionBtn.parentElement.nextElementSibling.classList.remove("show");
    }
    else{
        //Make sure that the "collapsed" class is added to all accordion buttons
        //(Add it to the only button that hasn't it)
        const btns=accordion.getElementsByClassName("accordion__button");
        for(let btn of btns){
            if(!(btn.classList.contains("collapsed"))){
                btn.classList.add("collapsed");
            }
        }

        //Make sure that none of the "accordion__collapse" classes has the "show class"
        //remove it from the only one.
        const acco_collapses=accordion.getElementsByClassName("accordion__collapse");
        for(let acco_col of acco_collapses){
            if(acco_col.classList.contains("show")){
                acco_col.classList.remove("show");
            }
        }

        //remove the "collapsed" class from the selected "accordion__button"
        accordionBtn.classList.remove("collapsed");

        //add the "show" class to the related "accordion__collapse" class
        accordionBtn.parentElement.nextElementSibling.classList.add("show");
    }
}

for(let accoBtn of document.getElementsByClassName("accordion__button")){
    accoBtn.onclick=collapse;
}