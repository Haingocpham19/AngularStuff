import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SharedService } from 'src/app/shared.service';
import { CreateOrUpdateMonanComponent } from '../create-or-update-monan/create-or-update-monan.component';

@Component({
  selector: 'app-ds-monan',
  templateUrl: './ds-monan.component.html',
  styleUrls: ['./ds-monan.component.scss']
})
export class DsMonanComponent implements OnInit {

  constructor(private service:SharedService,private modalService: NzModalService) { 
    
  }

  viewShow: 'list' | 'viewCreateOrUpdate' = 'list';

  dataItem:any;
  danhSachMonAn:any=[];
  dangThemSua:boolean = false;
  rawUrlAnhMon:any;

  ngOnInit(): void {
    this.rawUrlAnhMon = this.service.ApiPhoto;
    this.refresh();
  }

  refresh(){
    this.service.layDSMonAn().subscribe(data => {
      this.danhSachMonAn = data;
    })
  }

  addOrUpdateMonAn(monAn?:any){
    debugger
   let modal = this.modalService.create({
      nzTitle: monAn?'Sửa món ăn':'Thêm mới món ăn',
      nzContent: CreateOrUpdateMonanComponent,
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzComponentParams:{
        dataItem: monAn
      },
      nzOnOk:()=>{
         this.refresh();
      }
    });
    modal.afterClose.subscribe(result => {
      this.refresh();
    });

  }
  
  deleteMonAn(id:number):void{
    this.modalService.confirm({
      nzTitle: '<i>Bạn có muốn xóa món ăn này?</i>',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOnOk: () => {
        this.service.xoaMonAn(id).subscribe(data =>{
          this.refresh();
        });
      }
    }); 
  }

}
