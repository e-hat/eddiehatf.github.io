const title = 'eddie hatfield';
const delay = 200;
const deviation = 100;

window.onload = () => {
    titleElem = document.getElementById('title');

    const setTitleAtStep = (step) => () => {
        titleElem.innerHTML = title.substring(0, step + 1);
    }

    for (i = 0; i <= title.length; ++i) {
        setTimeout(setTitleAtStep(i), 
            delay * (i - 1) + Math.random() * deviation - deviation / 2);
    }

}