export const emitter = {
    watchers: [],
    watch(watcher) {
        this.watchers.push(watcher)
    },
    next(value) {
        this.watchers.forEach(watcher => watcher(value))
    }
};

const btn = document.querySelector('button');
btn.addEventListener(
    'click',
    event => emitter.next({x: event.clientX, y: event.clientY})
);
