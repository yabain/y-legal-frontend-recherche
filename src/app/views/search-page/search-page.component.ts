import { AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search/search.service';


declare var Choices:any;

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SearchPageComponent implements OnInit, AfterViewInit {

  form:FormGroup;
  constructor(private searchService:SearchService,private rootElement:ElementRef,private router:Router) { }
  ngAfterViewInit(): void {
    console.log(this.rootElement)
    
    // var textPresetVal = new Choices(
    //   '.choices-text-preset-values',
    //   {
    //     removeItemButton: true,
    //   });

    //   console.log("Remove ",textPresetVal)
  }

  ngOnInit(): void {
    this.form=new FormGroup({
      query:new FormControl("", [Validators.required])
    })
  }
  submit()
  {
    if(!this.form.valid) return;
    this.searchService.query=this.form.value.query;
    this.router.navigate(["/search"])

  }

}
