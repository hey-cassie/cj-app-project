import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-magic-api',
  templateUrl: './magic-api.component.html',
  styleUrls: ['./magic-api.component.css']
})
export class MagicApiComponent implements OnInit {
  public answer = '';
  display = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

    onRefreshFortune() {
    let params = encodeURIComponent("Is today going to be a good day?");
    let uri = "https://8ball.delegator.com/magic/JSON/" + params;
    fetch(uri)
    .then(response => response.json())
    .then(json => {
        this.answer = json.magic.answer;
    });
      this.display = true;
  }

}
