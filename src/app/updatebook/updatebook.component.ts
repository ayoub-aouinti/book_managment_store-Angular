import { bookmodel } from '../bookmodel';
import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  public dateid:any;
  public book:bookmodel = {} as bookmodel
  activateroute: any;

  constructor(private api:ApiService,private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((param:Params)=>{
      this.dateid = param['get']('id');
    })
    this.api.fetchdata(this.dateid).subscribe((data:any)=>{
      this.book = data;
    })
  }

  updatedata(){
    this.api.update(this.book,this.dateid).subscribe((data:any)=>{
      this.toastr.success("book updated sucessfully!!!");
      this.router.navigate(['/viewbook'])
    })
  }
}
