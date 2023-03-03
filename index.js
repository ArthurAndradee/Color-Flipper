function changeBackground () {
        const colorValues = ["Red","Blue", "Purple","Green","Brown","Orange","Cyan","White","Black"]
    
        const selNumber = Math.floor(Math.random() * 9);
        const randomColor = colorValues[selNumber];

        document.body.style.background = randomColor

        const title = document.getElementById("background-box")
        title.innerHTML = "Background Color: " + randomColor
    }