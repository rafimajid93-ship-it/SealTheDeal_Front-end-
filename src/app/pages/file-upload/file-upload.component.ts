import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from 'src/app/service/helper';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  file:any;
  flag=true;
  selectFile(event:any){
    this.file=event.target.files[0];
  }
  uploadFile(){
    let formData=new FormData();
    formData.append('file',this.file)
    this.http.post(`${baseUrl}/user/fileUpload`,formData).subscribe(
      (data)=>{

      },(error)=>{
        alert('Error')
      }
    )
  }
}
