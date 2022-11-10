import { Component, OnInit, NgZone } from '@angular/core';
import { NumberService } from '../services/number.service';

@Component({
  selector: 'app-gui-api',
  templateUrl: './gui-api.component.html',
  styleUrls: ['./gui-api.component.css']
})
export class GuiApiComponent implements OnInit {

  n: any;
  result: any;
  constructor(private service: NumberService) { }

  ngOnInit(): void {
    this.n = 0;

  }

  sendNumber() {
    this.result = '';
    this.service.getSequence(this.n).subscribe((response) => {
      
      this.result = 'Next sequence number: '+response;

    });
  }

}
