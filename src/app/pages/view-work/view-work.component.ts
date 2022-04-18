import { Component, OnInit } from '@angular/core';
import { EmployeerService } from 'src/app/service/employeer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.css']
})
export class ViewWorkComponent implements OnInit {

  constructor(private employeerService:EmployeerService) { }

  work:any
  ngOnInit(): void {
    this.employeerService.getWork().subscribe(
      (data:any)=>{
        this.work = data;
        console.log('data'+data);
      },
      (error)=>{
        console.log(error)
        Swal.fire("Error","Can not load data.","error")
      }
    )
  }

}
