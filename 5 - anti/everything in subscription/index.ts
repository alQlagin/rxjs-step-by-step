import { fromEvent } from "rxjs";
import { throttleTime, distinctUntilChanged, map, pluck } from "rxjs/operators";
import { renderLast } from "../../helpers/actions";

const processValue = (value: any) => {};

let lastProcessed: number;
let lastValue: any;
fromEvent(document.querySelector("input"), "input").subscribe(
  (value: Event) => {
    if (lastProcessed && lastProcessed < Date.now() - 100 * 1000) {
      lastProcessed = Date.now();
      const target = event.target as HTMLInputElement;
    
      if (lastValue && lastValue !== target.value) {
        lastValue = target.value;
        processValue(target.value);
      }
    }
  }
);

fromEvent(document.querySelector("input"), "click")
  .pipe(
    throttleTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
  .subscribe(renderLast);
