import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
    template: '{{data|json}}'
})
export class MyComponent implements OnInit, OnDestroy {
    data;
    subscription: Subscription;

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.subscription = this.http.get('/some/fake').subscribe(
            data => this.data = data
        )
    }
    ngOnDestroy(): void {
        this.subscription && this.subscription.unsubscribe()
    }
}
