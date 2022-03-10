const lift = document.getElementById("lift");
const liftText = document.getElementById("usedLiftAndText");
const floor = document.getElementById("floor");
const result = document.getElementById("result");
const moveUpBtn = document.getElementById("moveUpBtn");
const moveDownBtn = document.getElementById("moveDownBtn");
const selectFloor = document.getElementById("selectFloor");
const goBtn = document.getElementById("goBtn");
let toFloor = 0;
let onMotion = false;
let motion = null;
window.addEventListener("DOMContentLoaded", () => {
    onMotion = true;
    motion = setInterval(animateUp, 50);

    moveUpBtn.addEventListener("click", () => {
        let y = liftText.getAttribute("y");
        if (onMotion == true) {
            result.innerText = "lift on  motion. wait until the lift is at rest";
        } else {
            onMotion = true;
            motion = setInterval(animateUp, 50);
        }
    })

    moveDownBtn.addEventListener("click", () => {
        let y = liftText.getAttribute("y");
        if (onMotion == true) {
            result.innerText = "lift on  motion. wait until the lift is at rest";
        } else {
            onMotion = true;
            motion = setInterval(animateDown, 50);
        }
    })

    goBtn.addEventListener("click", () => {
        let floor = parseInt(selectFloor.value);
        let y = liftText.getAttribute("y");
        toFloor = (floor * 50) - 50;
        if (onMotion == true) {
            result.innerText = "lift on motion";
        } else {
            onMotion = true;
            motion = setInterval(animateTo, 50);
        }
    })
})

const animateTo = () => {
    let y = parseInt(liftText.getAttribute("y"));
    let newY = 0;
    if (toFloor > y) {
        newY = parseInt(y) + 1;
    } else {
        newY = parseInt(y) - 1;
    }
    if (newY == toFloor) {
        let floorNum = (newY + 50) / 50;

        setFloor(floorNum);
        onMotion = false;
        result.innerText = "lift at rest";
        clearInterval(motion);
        motion = null;
        lift.style.fill = "green";
    } else {
        lift.style.fill = "#7a1717";
        result.innerText = "lift in motion";

        if ((newY + 50) % 50 == 0) {
            lift.style.fill = "green";
        } else {
            lift.style.fill = "#7a1717";
        }
        let floorNum = (newY + 50) / 50;

        setFloor(floorNum);

        liftText.setAttribute("y", newY);
    }
}

const animateUp = () => {
    let y = liftText.getAttribute("y");
    let newY = parseInt(y) - 1;
    animate(newY);
}

const animateDown = () => {
    let y = liftText.getAttribute("y");
    let newY = parseInt(y) + 1;
    animate(newY);
}

const animate = newY => {
    if (newY > 450) {
        onMotion = false;
        result.innerText = "lift is down";
        clearInterval(motion);
        motion = null;
    } else if (newY < 0) {
        onMotion = false;
        result.innerText = "lift is up";
        clearInterval(motion);
        motion = null;
    } else {
        result.innerText = "lift on motion";

        if ((newY + 50) % 50 == 0) {
            lift.style.fill = "green";
        } else {
            lift.style.fill = "#7a1717";
        }
        let floorNum = (newY + 50) / 50;

        setFloor(floorNum);

        liftText.setAttribute("y", newY);
    }
}

const setFloor = floorNum => {
    switch (floorNum) {
        case 1:
            floor.textContent = "10";
            break;
        case 2:
            floor.textContent = "9";
            break;
        case 3:
            floor.textContent = "8";
            break;
        case 4:
            floor.textContent = "7";
            break;
        case 5:
            floor.textContent = "6";
            break;
        case 6:
            floor.textContent = "5";
            break;
        case 7:
            floor.textContent = "4";
            break;
        case 8:
            floor.textContent = "3";
            break;
        case 9:
            floor.textContent = "2";
            break;
        case 10:
            floor.textContent = "1";
            break;
        default:
            floor.textContent = "";
            break;
    }
}