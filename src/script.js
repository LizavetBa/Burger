document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let number = document.getElementById("number");
document.getElementById("order-action").onclick = function () {
    let hasError = false;
    [burger, name, number].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });
    if (!hasError) {
        [burger, name, number].forEach(item => {
            item.value = "";
        });
        alert("Thank you for your order!")
    }
}

let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;
    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurrency === "$") {
        newCurrency = "Zł";
        coefficient = 4.32;
    } else if (currentCurrency === "Zł") {
        newCurrency = "EUR";
        coefficient = 0.94;
    }
    else if (currentCurrency === "EUR") {
        newCurrency = "GBP";
        coefficient = 0.82;
    }
    else if (currentCurrency === "GBP") {
        newCurrency = "CZK";
        coefficient = 22.95;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}
