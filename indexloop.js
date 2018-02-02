window.addEventListener('load', start, false);

function getRandNum() {
        var num = Math.floor(Math.random() * 10);
        return num;
}


function start() {
    debugger;
    var rNum = getRandNum();
    var loopCounter1 = 1;

    var st = document.getElementById("b1");
    var nd = document.getElementById("b2");
    var rd = document.getElementById("b3");

    //box1
    while (loopCounter1 <= 10) {
        rNum = getRandNum();


        if (rNum >= 4 || rNum == 0) {
            getRandNum();
            continue;
        }

        if (rNum == 1) {
            st.className = "one";
        }
        if (rNum == 2) {
            st.className = "two";
        }
        if (rNum == 3) {
            st.className = "three";
        }

        loopCounter1++;  //break;
    }

    var loopCounter2 = 1;
    //box2
    while (loopCounter2 <= 10) {

        rNum = getRandNum();


        if (rNum >= 4 || rNum == 0) {
            getRandNum();
            continue;
        }
        if (rNum == 1) {
            nd.className = "one";
        }
        if (rNum == 2) {
            nd.className = "two";
        }
        if (rNum == 3) {
            nd.className = "three";
        }
        loopCounter2++;//break;
    }

    var loopCounter3 = 1;
    //box3
    while (loopCounter3 <= 10) {

        rNum = getRandNum();

        if (rNum >= 4 || rNum == 0) {
            getRandNum();
            continue; //if the number is 4+ or zero, regen
        }
        if (rNum == 1) {
            rd.className = "one";
        }
        if (rNum == 2) {
            rd.className = "two";
        }
        if (rNum == 3) {
            rd.className = "three";
        }
        loopCounter3++;// break;
    }
    //match check

    if (rd.className == nd.className && nd.className == st.className) {
        document.getElementById("msg").innerHTML =
     "Congratulations!! You won!"

    }
    else {
        document.getElementById("msg").innerHTML =
            "Sorry. Maybe next time?"
    }
}
