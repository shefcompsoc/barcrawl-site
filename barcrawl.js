function linkTo(target) {
    location.href = target;
}

function markObjective(id) {
    //Objectives should be in format XYY
    //Where X is venue number and YY is objective number
    var lsKey = 'obj' + id;

    if(localStorage.getItem(lsKey)) {
        //localStorage exists
        if(localStorage.getItem(lsKey) == 1) {
            //checked - so unchecked
            localStorage.setItem(lsKey, 0);
            document.getElementById(id).classList.remove('marked');
        }
        else {
            //unchecked - so check
            localStorage.setItem(lsKey, 1);
            document.getElementById(id).classList.add('marked');
        }
    }

}

function getObjective(id) {
    var lsKey = 'obj' + id;

    if(localStorage.getItem(lsKey)) {
        //localStorage exists - check if true or false (1 or 0)
        if(localStorage.getItem(lsKey) == 1) {
            //checked
            document.getElementById(id).classList.add('marked');
        }
        else {
            //unchecked
            document.getElementById(id).classList.remove('marked');
        }
    }
    else {
        //Does not exist - set as unchecked
        localStorage.setItem(lsKey, 0);
            document.getElementById(id).classList.remove('marked');
    }
}

window.addEventListener('DOMContentLoaded', function() {
        Array.from(document.querySelectorAll('.objective')).forEach(function(ob) {
        getObjective(ob.id);
        
        ob.addEventListener('click', function() {
            //Update individual
            markObjective(ob.id);
        });
    });
});