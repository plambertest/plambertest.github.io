san = document.getElementById("san")
w = getComputedStyle(san).height
o = 0
p = 0
c = 0

var rExp = new RegExp('px', "g");

console.log(w.replace(rExp, ''));

function q(a,b){
    san.style.left = a - 1,"px"
    san.style.top = b + 1 - Number(w.replace(rExp, '')),"px"
    int = setInterval(function r(){
        window.o += 0.05
        window.san.style.opacity = o
        if (window.o >= 1){
            clearInterval(int)
        }
    }, 0)
}
function qq(){
    window.c = 1
}
function qq1(){
    window.c = 0
}
function q1(){
    if (window.o != 0 && window.c == 0 && window.p == 0){
        int1 = setInterval(function r(){
            window.o -= 0.05
            window.p += 1
            window.san.style.opacity = o
            if (window.p == 20){
                clearInterval(int1)
                window.o = 0
                window.san.style.left = -1000 + "px"
                window.p = 0
            }
            if (window.c == 1){
                clearInterval(int1)
                window.o = 1
                window.san.style.opacity = o
                window.p = 0
            }
        }, 0)
    }
}

av = document.getElementById("av")
w1 = getComputedStyle(av)
o1 = 0
p1 = 0
c1 = 0

var rExp = new RegExp('px', "g");

console.log(w1.height.replace(rExp, ''));

function e(a,b){
    av.style.left = a - 1 - Number(w1.width.replace(rExp, '')),"px"
    av.style.top = b + 1 - Number(w1.height.replace(rExp, '')),"px"
    inte = setInterval(function r(){
        window.o1 += 0.05
        window.av.style.opacity = window.o1
        if (window.o1 >= 1){
            clearInterval(inte)
        }
    }, 0)
}
function ee(){
    window.c1 = 1
}
function ee1(){
    window.c1 = 0
}
function e1(){
    if (window.o1 != 0 && window.c1 == 0 && window.p1 == 0){
        inte1 = setInterval(function r(){
            window.o1 -= 0.05
            window.p1 += 1
            window.av.style.opacity = o1
            if (window.p1 == 20){
                clearInterval(inte1)
                window.o1 = 0
                window.av.style.left = -1000 + "px"
                window.p1 = 0
            }
            if (window.c1 == 1){
                clearInterval(inte1)
                window.o1 = 1
                window.av.style.opacity = window.o1
                window.p1 = 0
            }
        }, 0)
    }
}

