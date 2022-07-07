import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-thucdon',
  templateUrl: './ds-thucdon.component.html',
  styleUrls: ['./ds-thucdon.component.scss']
})
export class DsThucdonComponent implements OnInit {

  constructor(private service:SharedService) { }

  thucDon:any;
  tenThucDon:any;
  DanhSachThucDon:any=[];

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.service.layDSThucDon().subscribe(data => {
      this.DanhSachThucDon = data;
    })
  }

  addOrUpdateThucDon(thucDon?:any):void{
    debugger
    this.thucDon=thucDon;
  }

}
