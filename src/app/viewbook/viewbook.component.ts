import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  displayedColumns: string[] = ['Student id', 'Student Name', 'Fromdate', 'Todate', 'Book Name', 'Genre', 'Action'];
  dataSource! :MatTableDataSource<any>;

  constructor(private api:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.displaybook();
  }

  displaybook(){
    this.api.viewbook().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource();
      }
    })
  }

  delete(id:number){
    this.api.delete(id).subscribe(res=>{
      this.toastr.success("Book delete successfully!!!")
      this.displaybook();
    })
  }


}
