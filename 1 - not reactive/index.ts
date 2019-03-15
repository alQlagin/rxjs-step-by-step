import { renderLast, renderList } from '../helpers/actions';

const btn = document.querySelector('button');

const clicks = [];
btn.addEventListener('click', event => {
    const newValue = {x: event.clientX, y: event.clientY};
    clicks.push(newValue);
    renderLast(newValue);
    renderList(clicks);
});

