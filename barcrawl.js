function linkTo(target) {
    location.href = target;
}

function markObjective(objective) {
    //Objectives should be in format XYY
    //Where X is venue number and YY is objective number
    var lsKey = 'obj' + objective;

    if(localStorage.getItem(lsKey)) {
        //localStorage exists
        if(localStorage.getItem(lsKey) == 1) {
            //checked - so unchecked
            localStorage.setItem(lsKey, 0);
        }
        else {
            //unchecked - so check
            localStorage.setItem(lsKey, 1);
        }
    }

}

function getObjective(objective) {
    var lsKey = 'obj' + objective;

    if(localStorage.getItem(lsKey)) {
        //localStorage exists - check if true or false (1 or 0)
        if(localStorage.getItem(lsKey) == 1) {
            //checked
        }
        else {
            //unchecked
        }
    }
    else {
        //Does not exist - set as unchecked
        localStorage.setItem(lsKey, 0);
    }
}