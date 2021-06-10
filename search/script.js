window.addEventListener("load", () => {
    let google = document.querySelector(".g-btn"),
        bing = document.querySelector(".b-btn"),
        yandex = document.querySelector(".y-btn"),
        duck = document.querySelector(".d-btn");
    google.addEventListener("click", () => {
        let inputG = document.getElementById("g-input").value,
            url = `https://www.google.com/search?q=${inputG}`;
            if (inputG !== '') {
                window.open(url, "_self");
                inputG= '';
            }
    });
    bing.addEventListener("click", () => {
        let inputB = document.getElementById("b-input").value,
            url = `https://bing.com/search?q=${inputB}`;
        if(inputB !== ''){
            window.open(url, "_self");
            inputB = '';
        }
    });
    duck.addEventListener("click", () => {
        let inputD = document.getElementById("d-input").value,
            url = `https://duckduckgo.com/?q=${inputD}`;
        if(inputD !== ''){
            window.open(url, "_self");
            inputD = '';
        }
    });
    yandex.addEventListener("click", () => {
        let inputY = document.getElementById("y-input").value,
            url = `https://yandex.com/search/?text=${inputY}`;
        if(inputY !== ''){
            window.open(url, "_self");
            inputY = '';
        }
    });
})