import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message, Product } from '@app2/api-interfaces';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products$ = this.http.get<Product[]>('/api/product');
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.productsSer.getAll().subscribe((data) => {
    //   console.log(data)
    // })
  }
  
}
