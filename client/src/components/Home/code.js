export function sem() {
    var ob = document.getElementById('semester').selectedIndex;
    //document.write(ob.toString()+"hello ");
    //var l=document.getElementById('lb');
    //l.textContent='hello '+(ob+1).toString();
    ob = ob + 1;

    if (ob == 1) {
        var sub = document.getElementById('subject');
        var arr = [];
        var select = document.getElementById('subject');

        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
        var s = new Array('Environmental Science', 'Essence of Indian Traditional knowledge', 'Mathematics-1', 'Chemistry', ' programming for problem solving');
        for (var i = 0; i < 5; i++) {
            arr[i] = document.createElement('option');
            arr[i].text = s[i];
            sub.add(arr[i]);
            var l = document.getElementById('lb');
            // l.textContent='successfull 1';
        }
    }

    if (ob == 2) {
        var sub = document.getElementById('subject');
        var arr = [];
        var select = document.getElementById('subject');

        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
        var s = new Array('ALC', 'DBMS', 'DC', 'OS', 'SE');
        for (var i = 0; i < 5; i++) {
            arr[i] = document.createElement('option');
            arr[i].text = s[i];
            sub.add(arr[i]);
            var l = document.getElementById('lb');
            // l.textContent='successfull 2';
        }
    }
    if (ob == 3) {
        var sub = document.getElementById('subject');
        var arr = [];
        var select = document.getElementById('subject');

        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
        var s = new Array('ALC', 'DBMS', 'DC', 'OS', 'SE');
        for (var i = 0; i < 5; i++) {
            arr[i] = document.createElement('option');
            arr[i].text = s[i];
            sub.add(arr[i]);
            var l = document.getElementById('lb');
            // l.textContent='successfull 3';
        }
    }

    if (ob == 4) {
        var sub = document.getElementById('subject');
        var arr = [];
        var select = document.getElementById('subject');

        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
        var s = new Array('ALC', 'DBMS', 'DC', 'OS', 'SE');
        for (var i = 0; i < 5; i++) {
            arr[i] = document.createElement('option');
            arr[i].text = s[i];
            sub.add(arr[i]);
            var l = document.getElementById('lb');
            // l.textContent='successfull 4';
        }
    }



    if (ob == 5) {
        var sub = document.getElementById('subject');
        var arr = [];
        var select = document.getElementById('subject');

        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
        // document.getElementById('option').innerHTML = "";
        var s = new Array('AI', 'OS', 'Automata languages and compution', 'Web and Internet Technologies', 'Software Engineering');
        for (var i = 0; i < 5; i++) {

            arr[i] = document.createElement('option');
            arr[i].text = s[i];
            sub.add(arr[i]);
            var l = document.getElementById('lb');
            // l.textContent='successfull 5';
        }

        var ob = document.getElementById('semester').selectedIndex;






    }

    if (ob == 6) {
        var sub = document.getElementById('subject');
        var arr = [];
        var select = document.getElementById('subject');

        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
        var s = new Array('ALC', 'DBMS', 'DC', 'OS', 'SE');
        for (var i = 0; i < 5; i++) {
            arr[i] = document.createElement('option');
            arr[i].text = s[i];
            sub.add(arr[i]);
            var l = document.getElementById('lb');
            // l.textContent='successfull 6';
        }
    }

    if (ob == 7) {
        var sub = document.getElementById('subject');
        var arr = [];
        var select = document.getElementById('subject');

        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
        var s = new Array('ALC', 'DBMS', 'DC', 'OS', 'SE');
        for (var i = 0; i < 5; i++) {
            arr[i] = document.createElement('option');
            arr[i].text = s[i];
            sub.add(arr[i]);
            var l = document.getElementById('lb');
            // l.textContent='successfull 7';
        }
    }

    if (ob == 8) {
        var sub = document.getElementById('subject');
        var arr = [];
        var select = document.getElementById('subject');

        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
        var s = new Array('ALC', 'DBMS', 'DC', 'OS', 'SE');
        for (var i = 0; i < 5; i++) {
            arr[i] = document.createElement('option');
            arr[i].text = s[i];
            sub.add(arr[i]);
            var l = document.getElementById('lb');
            // l.textContent='successfull 8';
        }
    }
}

export function submitNotes() {
    var l = document.getElementById('lb');
    var ob = document.getElementById('subject').selectedIndex;
    var choice = document.getElementById('subject').options.item(ob).text;
    if (choice == 'AI') {
        sessionStorage.setItem("subject", "ai");
        window.location = "./Resource";
    }

    if (choice == 'OS') {
        sessionStorage.setItem("subject", "os");
        window.location = "./Resource";
    }

    if (choice == 'Software Engineering') {
        sessionStorage.setItem("subject", "se");
        window.location = "./Resource";
    }

    if (choice == 'Automata languages and compution') {
        sessionStorage.setItem("subject", "alc");
        window.location = "./Resource";
    }
    if (choice == 'Web and Internet Technologies') {
        sessionStorage.setItem("subject", "wit");
        window.location = "./Resource";

    }
}


export function submitOther() {
    var l = document.getElementById('lb');
    var ob = document.getElementById('subject').selectedIndex;
    var choice = document.getElementById('subject').options.item(ob).text;
    if (choice == 'AI') {
        sessionStorage.setItem("subject", "ai");
        window.location = "./OtherResource";
    }

    if (choice == 'OS') {
        sessionStorage.setItem("subject", "os");
        window.location = "./OtherResource";
    }

    if (choice == 'Software Engineering') {
        sessionStorage.setItem("subject", "se");
        window.location = "./OtherResource";
    }

    if (choice == 'Automata languages and compution') {
        sessionStorage.setItem("subject", "alc");
        window.location = "./OtherResource";
    }
    if (choice == 'Web and Internet Technologies') {
        sessionStorage.setItem("subject", "wit");
        window.location = "./OtherResource";

    }
}

