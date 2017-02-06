import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-hotspotlogin',
  templateUrl: './hotspotlogin.component.html',
  styleUrls: ['./hotspotlogin.component.css']
})
export class HotspotloginComponent implements OnInit {

  private subscription: Subscription;
  param: string;

  constructor(private route: ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(
        (queryParams: any) => {
          this.param = queryParams;
        }
      );
  }

  ngOnInit() {
    console.log(this.param);
  }

  onSubmit(formData) {

    function extend(obj, src) {
      Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
      return obj;
    }

    let extended = extend(formData, this.param);
    console.log(extended);
  }

}
