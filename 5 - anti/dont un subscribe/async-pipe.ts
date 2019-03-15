import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
    template: '{{data$|async|json}}'
})
export class MyComponent {
    data$ = this.http.get('/some/fake');

    constructor(private http: HttpClient) {
    }
}
