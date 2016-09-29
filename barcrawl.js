function linkTo(target) {
    location.href = target;
}

function showCheckbox(id) {
    var cbox  = document.getElementById('chk' + id);
    if (cbox.style.display == 'none') {
        cbox.style.display = '';
    }
}

function hideCheckbox(id) {
    var cbox  = document.getElementById('chk' + id);
    if (cbox.style.display != 'none') {
        cbox.style.display = 'none';
    }
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
            hideCheckbox(id);
        }
        else {
            //unchecked - so check
            localStorage.setItem(lsKey, 1);
            document.getElementById(id).classList.add('marked');
            showCheckbox(id);
        }
    }

}

function getObjective(id) {
    var lsKey = 'obj' + id;

    var checkbox = document.createElement("span");
    checkbox.id = 'chk' + id;
    checkbox.innerText = '✓';
    document.getElementById(id).firstElementChild.appendChild(checkbox);


    if(localStorage.getItem(lsKey)) {
        //localStorage exists - check if true or false (1 or 0)
        if(localStorage.getItem(lsKey) == 1) {
            //checked
            document.getElementById(id).classList.add('marked');
            showCheckbox(id);
        }
        else {
            //unchecked
            document.getElementById(id).classList.remove('marked');
            hideCheckbox(id);
        }
    }
    else {
        //Does not exist - set as unchecked
        localStorage.setItem(lsKey, 0);
        document.getElementById(id).classList.remove('marked');
        hideCheckbox(id);
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