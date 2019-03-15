import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { of, Subscription } from "rxjs";
import { pluck, publishReplay, refCount, switchMap } from "rxjs/operators";

class DataService {
  getById(id) {
    return of({ id });
  }
  getRelatedById(id) {
    return of([{ id: 1 }, { id: 2 }]);
  }
}

@Component({
  template: `
    {{ data$ | async }}
    <p *ngFor="let item of (related$ | async)">{{ item }}</p>
  `
})
export class UserDetailsComponent {
  id$ = this.route.params.pipe(pluck("id"));
  data$ = this.id$.pipe(
    switchMap(id => this.dataService.getById(id)),
  );
  related$ = this.data$.pipe(
    switchMap(data => this.dataService.getRelatedById(data.id))
  );

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
}
