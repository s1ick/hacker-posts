import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  response: any;
  loader: boolean = false;
  
  getDataFrontPage() {
    return this.http.get('http://hn.algolia.com/api/v1/search?tags=front_page')
  }
  getDataComments(idComments: number) {
    return this.http.get('https://hn.algolia.com/api/v1/items/'+idComments)
  }
}
