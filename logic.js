function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var namesArray = [],
    pickedArray = [],
    random, picked, index = 0;

document.getElementById("floatingTextarea2").addEventListener("keyup", function() {
    namesArray = document.getElementById("floatingTextarea2").value.split("/")
})

document.getElementById("pick").addEventListener("click", function() {
    if (namesArray.length == 0 && index == 0) {
        alert("your list is empty")
        return
    }

    if (namesArray.length > 0) {
        if (document.getElementById("flexSwitchCheckChecked").checked == true) {
            shuffle(namesArray)
        }
        setInterval(function() {
            if (index < namesArray.length) {
                document.getElementById("result").innerHTML = namesArray[index]
                index += 1
            }
        }, 200)

        setTimeout(function() {
            random = Math.floor(Math.random() * namesArray.length)
            picked = namesArray[random]
            namesArray.splice(random, 1)
            document.getElementById("result").innerHTML = picked
            pickedArray.push(picked)

            var x = document.createElement("h4")
            x.innerHTML = picked
            x.style.marginRight = "5px"
            x.style.textAlign = "center"
            document.getElementById("recent").appendChild(x)
        }, 210 * (namesArray.length + 1));
    } else {
        document.getElementById("result").innerHTML = "you have picked all your list items"
        index = 0
        document.getElementById("floatingTextarea2").value = ""
    }
})