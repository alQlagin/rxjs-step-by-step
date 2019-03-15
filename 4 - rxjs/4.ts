import { Observable } from 'rxjs';

const stream$ = new Observable(observer => {
    let i = 0;
    const intervalId = setInterval(() => observer.next(i++), 1000);
    return () => clearInterval(intervalId);
});
