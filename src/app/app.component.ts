import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  minDateToFinish = new Subject<string>();
  minDate;

  dateChange(e) {
    this.minDateToFinish.next(e.value.toString());
  }

  constructor() {
    this.minDateToFinish.subscribe(r => {
      this.minDate = new Date(r);
    })
  }
}
