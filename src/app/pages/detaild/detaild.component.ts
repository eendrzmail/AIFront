import { Employee } from 'src/app/models/GET/Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-detaild',
  templateUrl: './detaild.component.html',
  styleUrls: ['./detaild.component.css']
})
export class DetaildComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService,
  ) { }

  uid: string = '';
  person: Employee | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.uid = x.uid
      this.getWorker(x.uid)
    })
  }

  getWorker(uid: string) {
    this.http.getOneWorker(uid).subscribe(data => {
      this.person = data
    })
  }

}
