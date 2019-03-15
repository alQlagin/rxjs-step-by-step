import { Observable } from 'rxjs';

const stream$ = new Observable(observer => {
    let i = 0;
    setInterval(() => observer.next(i++), 1000)
});

stream$.subscribe(
    value => console.log('next value: ', value),
    err => console.error(err),
    () => console.log('done!')
);
