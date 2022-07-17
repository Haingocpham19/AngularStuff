import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-create-or-update-monan',
  templateUrl: './create-or-update-monan.component.html'
})
export class CreateOrUpdateMonanComponent implements OnInit {

  @Input() dataItem: any;
  selectedValue = null;
  comboboxThucDon: any;
  duongDanAnh: any;
  thucDonId: number = 1;
  handler = "";

  constructor(private service: SharedService, private fb: FormBuilder, private modal: NzModalRef) {

  }

  ngOnInit(): void {
    if (this.dataItem) {
      this.handler = "edit";
      this.duongDanAnh = this.service.ApiPhoto + "/" + this.dataItem.AnhMonAn;
      this.thucDonId = this.dataItem.MaThucDon;
    }
    else{
      this.handler = "add";
      this.duongDanAnh = this.service.ApiPhoto + "/" + "default.png";
      this.dataItem = {
        TenMonAn:'',
        AnhMonAn:'default.png'
      };
    }
    this.service.getComboxThucDon().subscribe(result => {
      console.log(result);
      this.comboboxThucDon = result;
    })
  }

  save(isSave: boolean) {
    debugger
    if (isSave) {
      if (this.handler == "add") {
        this.addMonAn();
      } else if(this.handler == "edit") {
        this.editMonAn(this.dataItem);
      }
    }
  }

  addMonAn() {
    var val = {
      tenMonAn: this.dataItem.TenMonAn,
      maThucDon: this.thucDonId,
      anhMonAn: this.dataItem.AnhMonAn
    };
    this.service.themMonAn(val).subscribe(data => {
      if (data) {
        this.cancel();
      }
    });
  }

  editMonAn(monAn: any) {
    var val = {
      id: monAn.Id,
      tenMonAn: this.dataItem.TenMonAn,
      maThucDon: this.thucDonId,
      anhMonAn: this.dataItem.AnhMonAn
    };
    this.service.suaMonAn(val, monAn.Id).subscribe(data => {
      this.cancel();
    });
  }
  cancel(isSave?: boolean) {
    this.modal.close(isSave);
  }
  uploadAnh(event: any) {
    var file = event.target.files[0];
    const formData = new FormData();
    formData.append('uploadfile', file, file.name);

    this.service.taiAnh(formData).subscribe((data: any) => {
      this.dataItem.AnhMonAn = data.toString();
      this.duongDanAnh = this.service.ApiPhoto + "/" + this.dataItem.AnhMonAn;
    })
  }
}
