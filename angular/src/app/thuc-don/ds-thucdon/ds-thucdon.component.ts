import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SharedService } from 'src/app/shared.service';
import { CreateOrUpdateThucdonComponent } from '../create-or-update-thucdon/create-or-update-thucdon.component';

@Component({
  selector: 'app-ds-thucdon',
  templateUrl: './ds-thucdon.component.html',
  styleUrls: ['./ds-thucdon.component.scss']
})
export class DsThucdonComponent implements OnInit {

  constructor(private service:SharedService,private modalService: NzModalService) { }

  DanhSachThucDon:any=[];
  dangThemSua:boolean = false;
  isVisible = false;

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.service.layDSThucDon().subscribe(data => {
      this.DanhSachThucDon = data;
    })
  }

  addOrUpdateThucDon(thucDon?:any):void{
    let modal = this.modalService.create({
      nzTitle: thucDon?'Sửa thực đơn':'Thêm mới thực đơn',
      nzContent: CreateOrUpdateThucdonComponent,
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzComponentParams:{
        dataItem:thucDon
      },
      nzOnOk:()=>{
         this.refresh();
      }
    });
    modal.afterClose.subscribe(result => {
      this.refresh();
    });
  }

  deleteThucDon(id:number):void{
    this.modalService.confirm({
      nzTitle: '<i>Bạn có muốn xóa thực đơn này?</i>',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOnOk: () => {
        this.service.xoaThucDon(id).subscribe(data =>{
          this.refresh();
        });
      }
    }); 
  }

  onBackToList($event:boolean):void{
    this.refresh();
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
