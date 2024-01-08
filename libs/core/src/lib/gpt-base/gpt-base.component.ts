/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '@deb-gpt/shared/environments';
import { GptserviceService } from '../gptservice.service';
import { GPTRequest, QuestionAnswer } from '../models/gpt.model';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'deb-gpt-base',
  templateUrl: './gpt-base.component.html',
  styleUrls: ['./gpt-base.component.scss'],
})
export class GptBaseComponent implements  OnDestroy {
  selectedModal: string;
  gptData: any[] | undefined;
  change: ChangeDetectorRef | undefined;
  chatService: Subscription | null = null;
  dataFromGPT: any = null;
  errorMessage: Error ;
  constructor(private service: GptserviceService) {
    this.selectedModal = '';
    this.errorMessage = {} as Error;
  }

 





  loadQuestions(data: string) {
    if (this.dataFromGPT) {
      this.dataFromGPT = null;
      this.change?.detectChanges();
    }
    if(this.errorMessage){
      this.errorMessage = {} as Error;
    }
    const request = {
      data: data
    }
    this.chatService = this.service
      .generateMCQS(request)
      .subscribe({
        next: (gptresponse) => {const dataFromGPT = gptresponse[`questionData`];
        this.dataFromGPT = dataFromGPT;
      },
      error: (err:HttpErrorResponse)=>{
        console.error(err);
        this.errorMessage = err.error as Error ;
      }
    });
  }

  ngOnDestroy(): void {
    this.chatService?.unsubscribe();
  }
}
