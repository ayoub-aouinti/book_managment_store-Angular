import { bookmodel } from './../bookmodel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buybook',
  templateUrl: './buybook.component.html',
  styleUrls: ['./buybook.component.css']
})
export class BuybookComponent implements OnInit {
  public book:bookmodel = {} as bookmodel;

  constructor(private api:ApiService,private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  apply(){
    this.api.buybook(this.book).subscribe((res=>{
      this.toastr.success("book bougth sucessfully!!!");
      this.router.navigate(['viewbook'])
    }))
  }
}
