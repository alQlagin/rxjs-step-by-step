import { Observable } from 'rxjs';

const stream$ = new Observable(observer => {
    let i = 0;
    setInterval(() => observer.next(i++), 1000)
})
