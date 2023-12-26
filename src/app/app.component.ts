import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent,MovieDetailsComponent,SearchComponent,HttpClientModule,RouterLink,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'netflix';
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#')
    if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
      this.navbg={
        'background-color':'#000000'
      }
  }
  else{
    this.navbg={}
  }
}
}
