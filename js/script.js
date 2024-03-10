const changeFontSize = (bigger) => {
    // I admit that this is a grossly suboptimal method but it will work for now ig...?
    let currentSizes = {};
    document.querySelectorAll('*').forEach((element) => {
        if (getComputedStyle(element).fontSize) {
            currentSizes[element.nodeName] = getComputedStyle(element).fontSize;
        }
    })
    document.querySelectorAll('*').forEach((element) => {
        if (getComputedStyle(element).fontSize == currentSizes[element.nodeName]) {
            element.style.fontSize = getComputedStyle(element).fontSize.slice(0, -2) * 1 + (bigger ? 2 : -2) + 'px';
        }
    })
}