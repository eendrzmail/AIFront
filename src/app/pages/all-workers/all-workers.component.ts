import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css']
})
export class AllWorkersComponent implements OnInit {

  constructor(
    private HttpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getWorkers()
  }

  getWorkers() {
    this.HttpService.getAllWorkers().subscribe(x => {
      console.log(x);

    })
  }

}
