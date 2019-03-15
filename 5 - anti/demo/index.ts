import { dotRenderer, renderLast, renderList } from '../../helpers/actions';
import { combineLatest, fromEvent, merge } from 'rxjs';
import {
    filter, map, publishReplay, refCount, scan, startWith,
    switchMap, takeUntil, tap, throttleTime
} from 'rxjs/operators';

const mapToCoords = map(event => ({x: event.clientX, y: event.clientY}));
const click$ = fromEvent(document, 'click').pipe(
    mapToCoords,
);

const isLeftClick = (event: MouseEvent) => event.button === 0;

const startdraw$ = fromEvent(document, 'mousedown').pipe(
    filter(isLeftClick),
);
const enddraw$ = fromEvent(document, 'mouseup').pipe(
    filter(isLeftClick),
);

const draw$ = startdraw$.pipe(
    switchMap(() => fromEvent(document, 'mousemove').pipe(
        takeUntil(enddraw$),
        mapToCoords
        )
    ),
    throttleTime(25),
);

const list$ = merge(click$, draw$).pipe(
    scan((clicks, click) => [...clicks, click], []),
    publishReplay(1),
    refCount()
);

const icon$ = merge(
    fromEvent(document.getElementById('unicorn'), 'click'),
    fromEvent(document.getElementById('fox'), 'click'),
    fromEvent(document.getElementById('rainbow'), 'click'),
).pipe(
    tap((e: MouseEvent) => (e.preventDefault(), e.stopPropagation(), console.log(e))),
    map((e: MouseEvent) => (e.target as HTMLElement).innerText),
    startWith('🌈')
);

click$.subscribe(renderLast);
list$.subscribe(renderList);
combineLatest(list$, icon$).pipe(
    map(([clicks, icon]) => ({clicks, icon}))
).subscribe(dotRenderer);
