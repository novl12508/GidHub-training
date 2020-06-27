let strelka = document.querySelectorAll(".services i");

let main = document.querySelectorAll(".main_services");

let rounder = document.querySelectorAll(".rounder_bottom");

let rotter = document.querySelectorAll(".rotat");

for (let i = 0; i < strelka.length; i++) {
    strelka[i].onclick = function() {
        if (rounder[i].className == "rounder_bottom") {
            main[i].style.padding = "25px 25px 25px 25px";
            rounder[i].className += " rounder_click";
            rotter[i].style.transform = "rotate(180deg)";
        } else {
            rotter[i].style.transform = "rotate(0deg)";
            rounder[i].className = "rounder_bottom";
            main[i].style.padding = "25px 25px 0 25px";
        }
    }
}