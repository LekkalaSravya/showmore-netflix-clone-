import { Component } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule} from '@angular/forms'
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
   constructor(private service:MovieApiServiceService){

   }
   ngOnInit():void{

   }
   searchResult:any;
   searchForm = new FormGroup({
    'movieName':new FormControl(null)
   });
   submitForm(){
    console.log(this.searchForm.value,'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result,'searchmovie##');
      this.searchResult=result.results;
    });
  }

}
