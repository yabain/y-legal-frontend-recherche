import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  result=[]
  query:string=""
  loading:boolean=false;
  form:FormGroup;
  response:any={}

  constructor(private searchService:SearchService,private router:Router) { }


  ngOnInit(): void {
    this.form=new FormGroup({
      query:new FormControl(this.searchService.query, [Validators.required])
    })

    this.find()
  }

  find()
  {
    this.loading=true;
    this.result=[]
    this.response={}
    this.query=this.form.value.query
    this.searchService.search(this.form.value.query)
    .then((result)=>
    {
      this.response=result.result
      this.loading=false
      this.result=this.response?.hits?.hits.map((hit)=>{
        return {
          content:hit?.highlight?.text.map((text)=>text.replace("\n","")).reduce((acc,curr)=>acc+""+curr,"").substring(0,300)+"...",
          title:hit?._source?.text.replace("\n","").substring(0,70)
        }
      })
    })
    .catch((error)=>
    {
      this.loading=false;
      console.log(error)
    })
  }

  submit()
  {
    if(!this.form.valid) return;
    this.searchService.query=this.form.value.query
    let url= this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = ()=> false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([url])
  }

}
