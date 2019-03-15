import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { of, Subscription } from "rxjs";
import { pluck, publishReplay, refCount, switchMap } from "rxjs/operators";

class DataService {
    getById(id) {
        return of({id});
    }

    getRelatedById(id) {
        return of([{id: 1}, {id: 2}]);
    }
}

@Component({
    template: `
        {{ data }}
        <p *ngFor="let item of related">{{ item }}</p>
    `
})
export class UserDetailsComponent implements OnInit, OnDestroy {
    data;
    related;
    subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) {
    }

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe(
            params => {
                this.dataService.getById(params.id).subscribe(
                    data => {
                        this.data = data;
                        this.dataService.getRelatedById(data.id).subscribe(
                            related => this.related = related
                        )
                    }
                )
            }
        )
    }
    ngOnDestroy(): void {
        this.subscription && this.subscription.unsubscribe()
    }
}
