let input;

function addingEventListener() {
    input = document.getElementById("button");
    input.addEventListener('click', () => {
        console.log(input);
    })
}

addingEventListener();