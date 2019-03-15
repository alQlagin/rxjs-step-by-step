import { Observable } from 'rxjs';

const stream$ = new Observable(observer => {
    let i = 0;
    setInterval(() => observer.next(i++), 1000)
});

const subscription = stream$.subscribe(
    value => console.log('next value: ', value),
    err => console.error(err),
    () => console.log('done!')
);

setTimeout(
    () => subscription.unsubscribe(),
    4200
);
