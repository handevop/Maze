var n = 50,
    ni = 30;
var zadnjai = ni - 1,
    zadnjaj = n - 1,
    velicina = "20px";
var defH = 0,
    defW = 0;

function pos() {
    defH = window.innerHeight;
    defW = window.innerWidth;
}
pos();

var nn = document.getElementById('save');
nn.style.width = n * 20 - 5 + 'px';
nn.style.height = ni * 20 - 5 + 'px';
nn.style.position = "relative";
nn.style.left = "50%";
var pozPluss = -n * 20 / 2 - 1;
nn.style.marginLeft = (defW - window.innerWidth) + pozPluss + 'px'; //845 634
nn.style.zIndex = "1";

for (var i = 0; i < ni; i++) {
    for (var j = 0; j < n; j++) {
        var r = (Math.random() * 10)
        var para = document.createElement("p");
        para.innerHTML = "i";
        para.style.backgroundColor = "#4666FF";
        para.style.width = velicina;
        para.style.fontSize = "0px";
        para.id = i * n + j;
        para.style.borderTop = " 2px solid black";
        para.style.borderLeft = " 2px solid black";
        para.style.borderBottom = " 2px solid black";
        para.style.borderRight = " 2px solid black";
        para.style.height = velicina;
        para.style.position = "absolute";
        para.style.left = "50%";
        para.style.top = (i * 20) + 'px';
        var pozPlus = -n * 20 / 2 + j * 20;
        para.style.marginLeft = pozPlus + "px";
        var el = document.getElementById("bring");
        el.appendChild(para);
    }
}
var el = document.getElementById('show');

function docReady() {
    window.addEventListener('keydown', moveSelection);
}

var poci = 0;
pocj = 0;

var myi = ni - 1,
    myj = n - 1;
var item = document.getElementById(myi * n + myj);

var img = document.createElement("img");

img.src = "CaptureHard.png";

item.appendChild(img);
var matrica = new Array();

for (var i = 0; i < ni; i++) {
    matrica[i] = new Array(n);
}

for (var i = 0; i < ni; i++) {
    for (var j = 0; j < n; j++) {
        matrica[i][j] = 0;
    }
}
var pozi = 0,
    pozj = 0;

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}

function leftArrowPressed() {
    if (myj - 1 >= 0) {
        myj--;
        var stari = document.getElementById(myi * n + myj + 1);
        if (stari.style.borderLeft != "0px") myj++;
        stari.removeChild(stari.childNodes[0]);
        var novi = document.getElementById(myi * n + myj);
        novi.appendChild(img);
    }
    setTimeout("provjeri()", 10);
}

function provjeri() {
    if (myi == 0 && myj == 0) {
        if (confirm("Bravo , zavrsio si igru , ponovo?")) {
            myi = poci;
            my = pocj;
            var stari = document.getElementById(myi * n + myj);
            stari.removeChild(stari.childNodes[0]);
            var novi = document.getElementById(poci * n + pocj);
            novi.appendChild(img);
            location.reload();
        } else {
            window.location.href = "main.html";
        }
    }
}

function rightArrowPressed() {
    if (myj + 1 < n) {
        myj++;
        var stari = document.getElementById(myi * n + myj - 1);
        if (stari.style.borderRight != "0px") myj--;
        stari.removeChild(stari.childNodes[0]);
        var novi = document.getElementById(myi * n + myj);
        novi.appendChild(img);
    }
    setTimeout("provjeri()", 10);
}

function upArrowPressed() {
    if (myi - 1 >= 0) {
        myi--;
        var stari = document.getElementById((myi + 1) * n + myj);
        if (stari.style.borderTop != "0px") myi++;
        stari.removeChild(stari.childNodes[0]);
        var novi = document.getElementById(myi * n + myj);
        novi.appendChild(img);
    }
    setTimeout("provjeri()", 10);
}

function downArrowPressed() {
    if (myi + 1 < ni) {
        myi++;
        var stari = document.getElementById((myi - 1) * n + myj);
        if (stari.style.borderBottom != "0px") myi--;
        stari.removeChild(stari.childNodes[0]);
        var novi = document.getElementById(myi * n + myj);
        novi.appendChild(img);
    }
    setTimeout("provjeri()", 10);
}

var x = [1, -1, 0, 0];
var y = [0, 0, 1, -1];
var redi = new Array();
var redj = new Array();
redi.unshift(poci);
redj.unshift(pocj);
var a, pokraj;
matrica[pozi][pozj] = 1;

function gradi() {
    pozi = redi[0];
    pozj = redj[0];
    if (redi.length == 0) return;
    redi.shift();
    redj.shift();
    if (pozi == zadnjai && pozj == zadnjaj && matrica[pozi][pozj] != -1) {
        gradi();
        return;
    }
    var granica = 0;

    if (pozj + 1 < n) {
        if (matrica[pozi][pozj + 1] != 1 || matrica[pozi][pozj] == -1) granica++;
    }
    if (pozj - 1 >= 0) {
        if (matrica[pozi][pozj - 1] != 1 || matrica[pozi][pozj] == -1) granica++;
    }
    if (pozi + 1 < ni) {
        if (matrica[pozi + 1][pozj] != 1 || matrica[pozi][pozj] == -1) granica++;
    }
    if (pozi - 1 >= 0) {
        if (matrica[pozi - 1][pozj] != 1 || matrica[pozi][pozj] == -1) granica++;
    }
    var nana;
    nana = Math.floor(Math.random() * 3);
    if (nana == 0) nana++;
    granica = Math.min(granica, nana);
    for (var k = 0; k < granica; k++) {

        switch (Math.floor(Math.random() * 10) % 4) {
            case 0:
                if (pozj + 1 < n) {
                    if (matrica[pozi][pozj + 1] != 1 || matrica[pozi][pozj] == -1 && matrica[pozi][pozj + 1] == 1) {
                        redi.unshift(pozi);
                        redj.unshift(pozj + 1);
                        matrica[pozi][pozj + 1] = 1;
                        a = document.getElementById(pozi * n + pozj);
                        pokraj = document.getElementById(pozi * n + pozj + 1);
                        a.style.borderRight = "0px";
                        pokraj.style.borderLeft = "0px";
                    } else k--;
                } else k--;
                break;
            case 1:
                if (pozj - 1 >= 0) {
                    if (matrica[pozi][pozj - 1] != 1 || matrica[pozi][pozj] == -1 && matrica[pozi][pozj - 1] == 1) {
                        redi.unshift(pozi);
                        redj.unshift(pozj - 1);
                        matrica[pozi][pozj - 1] = 1;
                        a = document.getElementById(pozi * n + pozj);
                        pokraj = document.getElementById(pozi * n + pozj - 1);
                        a.style.borderLeft = "0px";
                        pokraj.style.borderRight = "0px";
                    } else k--;
                } else k--;
                break;
            case 2:
                if (pozi + 1 < ni) {
                    if (matrica[pozi + 1][pozj] != 1 || matrica[pozi][pozj] == -1 && matrica[pozi + 1][pozj] == 1) {
                        redi.unshift(pozi + 1);
                        redj.unshift(pozj);
                        matrica[pozi + 1][pozj] = 1;
                        a = document.getElementById(pozi * n + pozj);
                        pokraj = document.getElementById((pozi + 1) * n + pozj);
                        a.style.borderBottom = "0px";
                        pokraj.style.borderTop = "0px";
                    } else k--;
                } else k--;
                break;
            case 3:
                if (pozi - 1 >= 0) {
                    if (matrica[pozi - 1][pozj] != 1 || matrica[pozi][pozj] == -1 && matrica[pozi - 1][pozj] == 1) {
                        redi.unshift(pozi - 1);
                        redj.unshift(pozj);
                        matrica[pozi - 1][pozj] = 1;
                        a = document.getElementById(pozi * n + pozj);
                        pokraj = document.getElementById((pozi - 1) * n + pozj);
                        a.style.borderTop = "0px";
                        pokraj.style.borderBottom = "0px";
                    } else k--;
                } else k--;
                break;

            default:
                break;
        }
    }
    if (pozj + 1 < n) {
        if (matrica[pozi][pozj + 1] != 1) {
            redi.push(pozi);
            redj.push(pozj + 1);
            matrica[pozi][pozj + 1] = -1;
        }
    }
    if (pozj - 1 >= 0) {
        if (matrica[pozi][pozj - 1] != 1) {
            redi.push(pozi);
            redj.push(pozj - 1);
            matrica[pozi][pozj - 1] = -1;
        }
    }
    if (pozi + 1 < ni) {
        if (matrica[pozi + 1][pozj] != 1) {
            redi.push(pozi + 1);
            redj.push(pozj);
            matrica[pozi + 1][pozj] = -1;
        }
    }
    if (pozi - 1 >= 0) {
        if (matrica[pozi - 1][pozj] != 1) {
            redi.push(pozi - 1);
            redj.push(pozj);
            matrica[pozi - 1][pozj] = -1;
        }
    }
    gradi();
}
gradi();