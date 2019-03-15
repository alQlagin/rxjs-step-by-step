export const renderLast = ({x, y}) => {
    document.getElementById('last').innerText = `Last is [${x}, ${y}]`
};
export const renderList = (clicks) => {
    document.getElementById('list').innerHTML = [...clicks].reverse().map(
        ({x, y}) => `<li>[${x}, ${y}]</li>`
    ).join('')
};

export const createListRenderer = (renderer = renderList) => {
    const clicks = [];
    return (click) => {
        clicks.push(click);
        renderer(clicks)
    }
};

export const dotRenderer = ({clicks, icon}) => {
    document.getElementById('dots').innerHTML = clicks.map(
        ({x, y}) => `<div class="dot" style="top: ${y}px; left: ${x}px">${icon}</div>`
    ).join('')
};
export const logDone = () => console.log('done');
