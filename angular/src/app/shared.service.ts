import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly ApiUrl = 'https://localhost:7045/api';
  readonly ApiPhoto = 'http://localhost:7045/images';
  constructor(private http:HttpClient) {}

  layDSThucDon():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/thucDon');
  }
  themThucDon(val:any):Observable<any[]>{
    return this.http.post<any>(this.ApiUrl+'/thucDon',val);
  }
  suaThucDon(val:any):Observable<any[]>{
    return this.http.put<any>(this.ApiUrl+'/thucDon',val);
  }
  xoaThucDon(val:any):Observable<any>{
    return this.http.delete<any>(this.ApiUrl+'/thucDon',val);
  }
  getComboxThucDon():Observable<any>{
    return this.http.get<any>(this.ApiUrl+'/thucDon/getComBoboxThucDon');
  }
  layDSMonAn():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/monAn');
  }
  themMonAn(val:any):Observable<any[]>{
    return this.http.post<any>(this.ApiUrl+'/monAn',val);
  }
  suaMonAn(val:any):Observable<any[]>{
    return this.http.put<any>(this.ApiUrl+'/monAn',val);
  }
  xoaMonAn(val:any):Observable<any>{
    return this.http.delete<any>(this.ApiUrl+'/monAn',val);
  }
  taiAnh(val:any):Observable<any>{
    return this.http.post<any>(this.ApiUrl+'/monAn/saveFile',val);
  }
}
