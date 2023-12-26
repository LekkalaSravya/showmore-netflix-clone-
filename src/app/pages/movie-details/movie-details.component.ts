import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
   constructor(private service:MovieApiServiceService,private router:ActivatedRoute){}
   getMovieDetailsResult:any;
   getMovieVideoResult:any;
   getMovieCastResult:any;
   ngOnInit():void{
      let getParamId=this.router.snapshot.paramMap.get(`id`);
      console.log(getParamId,'getparamid#');
      this.getMovie(getParamId);
      this.getVideo(getParamId);
      this.getMovieCast(getParamId);
   }
   getMovie(id:any){
     this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'getmoviedetails#');
      this.getMovieDetailsResult=result;
     });
   }
   getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getMovieVideo#');
      result.results.forEach((element:any)=>{
        if(element.type=="Trailer"){
          this.getMovieVideoResult=element.key;
        }
      });
       
    });
   }
   getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'moviecast#');
      this.getMovieCastResult=result.cast;
    });
   }

}
