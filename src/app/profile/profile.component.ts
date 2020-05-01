import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  public user = {};
  public issues = {};

  ngOnInit() {

    this.authService.getUser().subscribe(data => this.user = data);
    this.authService.getIssues().subscribe(data => this.issues = data);
    
  }

  

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

}
