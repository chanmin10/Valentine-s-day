const defense = Array.from(
    document.querySelectorAll(".d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9")
);
const noBtn = document.querySelector(".no");
const please = document.getElementById("please");

let intervalId = null;
let x = 0, y = 0;

const x_step = 70;
const y_step = 70;
const interval = 10;
let cnt = 0;

function move(dir) {
    switch (dir){
        case "up" : y += y_step; break;
        case "upLeft" : x += x_step; y += y_step; break;
        case "left" : x += x_step; break;
        case "downLeft" : x += x_step; y -= y_step; break;
        case "down" : y -= y_step; break;
        case "downRight" : x -= x_step; y -= y_step; break;
        case "right" : x -= x_step; break;
        case "upRight" : x -= x_step; y += y_step; break;
    }
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    cnt += 1;
    if (cnt > 4 && cnt < 9){
        please.style.opacity = (cnt-4)*0.1;
    }
    else if (cnt < 20){
        please.style.width = `${cnt*10+900}px`;
    }
}

defense.forEach(d => {
    const dir = d.dataset.dir;

    d.addEventListener("mouseenter", () => {
        if (intervalId !== null) return;

        intervalId = setInterval(() => {
            move(dir);
        }, interval);
    });

    d.addEventListener("mouseleave", () => {
        clearInterval(intervalId);
        intervalId = null;
    });
});

const yesBtn = document.querySelector(".yes");
const msg = document.getElementById("msg");
const hide = document.querySelectorAll(".yes, .no");
const show = document.querySelector(".gif");

yesBtn.addEventListener("click", () => {
    msg.textContent = "YAYYYYYYYYY!!!!!😉";
    hide.forEach(h => h.style.display = "none");
    show.style.display = "block";
    please.style.opacity = "0";
})