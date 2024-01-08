import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@deb-gpt/shared/environments';
import { Observable } from 'rxjs';
import { GPTRequest } from './models/gpt.model';

@Injectable({
  providedIn: 'root'
})
export class GptserviceService {
  private CUSTOMURL = `https://${environment.SAMAPI}.execute-api.${environment.SAMREGION}.amazonaws.com/prod`;
  private openApiHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient
  ) {
    this.openApiHeaders = this.openApiHeaders.set('Authorization',`Bearer ${environment.OPENAPITOKEN}`)
  }

  generateMCQS(data:object):Observable<any>{
    return this.http.post(`${this.CUSTOMURL}/quizgen`,data,{headers: this.openApiHeaders})
  }
}
