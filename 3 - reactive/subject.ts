import { createObservable } from './observable';

export const subject = createObservable();
document.addEventListener("click", event =>
    subject.update({ x: event.clientX, y: event.clientY })
);
