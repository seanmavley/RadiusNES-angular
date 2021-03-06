import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HelperService } from '../../services/helpers.service';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-hotspotlogin',
  templateUrl: './hotspotlogin.component.html',
  styleUrls: ['./hotspotlogin.component.css']
})
export class HotspotloginComponent implements OnInit {

  private subscription: Subscription;
  param: string;

  constructor(
    public router: Router,
    public auth: AuthenticationService,
    private route: ActivatedRoute,
    public helper: HelperService) {
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
    let extended = this.helper.extend(formData, this.param);
    console.log(extended);
    this.auth.userLogin(extended)
      .subscribe((result) => {
        console.log(result);
        console.log(`${result.uamip }:${result.uamport}`);
        // this.router.navigateByUrl(`http://${result.uamip}:${result.uamport}/logon`);
        window.location.href = `http://${result.uamip }:${result.uamport}/logon?username=${result.username}&password=${result.pappassword}`;
      })
  }

}
