import { Component, OnInit } from '@angular/core';
import { Station } from './station';

@Component({
  selector: 'app-metro-route',
  templateUrl: './metro-route.component.html',
  styleUrls: ['./metro-route.component.css'],
})
export class MetroRouteComponent implements OnInit {
  stations = [
    'L B Nagar',
    'Victoria Memorial',
    'Chaitanyapuri',
    'Dilsukhnagar',
    'Musarambagh',
    'New Market',
    'Malakpet',
    'MG Bus Station',
    'Osmania Medical college',
    'Gandhi Bhawan',
    'Nampally',
    'Assembly',
    'Lakdi-ka-pul',
    'Khairatabad',
    'Irrum Manzil',
    'Punjagutta',
    'Ameerpet',
    'S R Nagar',
    'ESI Hospital',
    'Erragadda',
    'Bharat Nagar',
    'Moosapet',
    'Dr B R Ambedkar Balanagar',
    'Kukatpally',
    'KPHB Colony',
    'JNTU College',
    'Miyapur',
    'Sultan Bazaar',
    'Narayanaguda',
    'Chikkadpally',
    'RTC X roads',
    'Musheerabad',
    'Gandhi Hospital',
    'Secunderabad West',
    'JBS Parade Ground',
    'Nagole',
    'Uppal',
    'Stadium',
    'NGRI',
    'Habsiguda',
    'Tarnaka',
    'Mettuguda',
    'Secunderabad East',
    'Paradise',
    'Rasoolpura',
    'Prakash Nagar',
    'Begumpet',
    'Madhura Nagar',
    'Yusufguda',
    'Road no 5 Jubilee Hills',
    'Jubilee Hills Check Post',
    'Peddamma Gudi',
    'Madhapur',
    'Durgam Cheruvu',
    'Hitech city',
    'Raidurg',
  ];
  redRoute = [
    'L B Nagar',
    'Victoria Memorial',
    'Chaitanyapuri',
    'Dilsukhnagar',
    'Musarambagh',
    'New Market',
    'Malakpet',
    'MG Bus Station',
    'Osmania Medical college',
    'Gandhi Bhawan',
    'Nampally',
    'Assembly',
    'Lakdi-ka-pul',
    'Khairatabad',
    'Irrum Manzil',
    'Punjagutta',
    'Ameerpet',
    'S R Nagar',
    'ESI Hospital',
    'Erragadda',
    'Bharat Nagar',
    'Moosapet',
    'Dr B R Ambedkar Balanagar',
    'Kukatpally',
    'KPHB Colony',
    'JNTU College',
    'Miyapur',
  ];
  greenRoute = [
    'MG Bus Station',
    'Sultan Bazaar',
    'Narayanaguda',
    'Chikkadpally',
    'RTC X roads',
    'Musheerabad',
    'Gandhi Hospital',
    'Secunderabad West',
    'JBS Parade Ground',
  ];
  blueRoute = [
    'Nagole',
    'Uppal',
    'Stadium',
    'NGRI',
    'Habsiguda',
    'Tarnaka',
    'Mettuguda',
    'Secunderabad East',
    'JBS Parade Ground',
    'Paradise',
    'Rasoolpura',
    'Prakash Nagar',
    'Begumpet',
    'Ameerpet',
    'Madhura Nagar',
    'Yusufguda',
    'Road no 5 Jubilee Hills',
    'Jubilee Hills Check Post',
    'Peddamma Gudi',
    'Madhapur',
    'Durgam Cheruvu',
    'Hitech city',
    'Raidurg',
  ];  
  //variables declaration begins
  from = '';
  to = '';
  fromStation: Station;
  toStation: Station;
  commonStation:Station;
  fromColor:string;
  toColor:string;
  message:string;
  validationError:boolean=false;
  conditionalClassforResultDisplay:any;
  

  //variables declaration ends

  constructor() {
    this.fromStation = new Station();
    this.toStation = new Station();
    this.commonStation = new Station();
    this.fromColor='';
    this.toColor='';
    this.message='';
  }
  ngOnInit(): void {
  }
  setUserSelectionFrom(e:any) {
    this.from = e.target.value;
    this.assignStationValues('from', this.from);
  }
  setUserSelectionTo(e:any) {
    this.to = e.target.value;
    this.assignStationValues('to', this.to);
  }
  assignStationValues(str: string, stn: string) {
    if (str === 'from') {
      this.assignFromStationValues(stn);
    } else {
      this.assignToStationValues(stn);
    }
  }
  assignFromStationValues(stn: string) {    
    //reset variables
    this.fromStation.isRed =this.fromStation.isGreen =this.fromStation.isBlue =false;
    this.fromStation.stationName='';
    //assign station name
    this.fromStation.stationName = stn;
    //assign the color
    this.fromStation.isRed = this.redRoute.includes(stn);
    this.fromStation.isGreen = this.greenRoute.includes(stn);
    this.fromStation.isBlue = this.blueRoute.includes(stn);  
  }
  assignToStationValues(stn: string) {
    //reset variables
    this.toStation.isRed =this.toStation.isGreen =this.toStation.isBlue =false;
    this.toStation.stationName='';
    //assign station name
    this.toStation.stationName = stn;
    //assign the color
    this.toStation.isRed = this.redRoute.includes(stn);
    this.toStation.isGreen = this.greenRoute.includes(stn);
    this.toStation.isBlue = this.blueRoute.includes(stn);     
  }

  getRoute() {
    if(this.ValidateRoute()){
      if ((this.fromStation.isBlue && this.toStation.isBlue)||(this.fromStation.isRed && this.toStation.isRed)
      ||(this.fromStation.isGreen && this.toStation.isGreen)){
        this.BothStationsSameRoute();
      }
      else{
        this.BothStationsDifferentRoute();
      }
    }   
  }
  ValidateRoute():boolean {
    this.message='';
    this.validationError=false;
    this.conditionalClassforResultDisplay={
      "text-break":true,
      "alert":true,
       "alert-success":!this.validationError,
       "alert-danger":this.validationError
    }
    if(this.fromStation.stationName==''|| this.toStation.stationName==''){      
      this.message='Please select From and To Stations to get route details.';
      this.validationError=true;
      this.conditionalClassforResultDisplay={
        "text-break":true,
        "alert":true,
         "alert-success":!this.validationError,
         "alert-danger":this.validationError
      }      
      return false;
    }
    if(this.fromStation.stationName==this.toStation.stationName){
      this.message='From and To Stations selected are the same. Please verify.';
      this.validationError=true;
      this.conditionalClassforResultDisplay={
        "text-break":true,
        "alert":true,
         "alert-success":!this.validationError,
         "alert-danger":this.validationError
      }
      return false;
    }
    return true;
  }
  getCommonStation():Station {
    if((this.fromStation.isRed && this.toStation.isBlue)|| (this.fromStation.isBlue && this.toStation.isRed)){
      this.commonStation.stationName='Ameerpet';
      this.commonStation.isBlue=true;
      this.commonStation.isGreen=false;
      this.commonStation.isRed=true;
    }
    else if((this.fromStation.isRed && this.toStation.isGreen)|| (this.fromStation.isGreen && this.toStation.isRed)){
      this.commonStation.stationName='MG Bus Station';
      this.commonStation.isBlue=false;
      this.commonStation.isGreen=true;
      this.commonStation.isRed=true;
    }
    else if((this.fromStation.isGreen && this.toStation.isBlue)|| (this.fromStation.isBlue && this.toStation.isGreen)){
      this.commonStation.stationName='JBS Parade Ground';
      this.commonStation.isBlue=true;
      this.commonStation.isGreen=true;
      this.commonStation.isRed=false;
    }

    return this.commonStation;

  }
  getEndStation(from:string, to:string,color:string):string {
    let end:string ='';
    let route:string[]=[];
    let fromIndex=-1;
    let toIndex=-1;
    switch (color) {
      case 'Red':
          route=this.redRoute;          
          break;
      case 'Green':
        route=this.greenRoute;
          break;
      case 'Blue':
        route=this.blueRoute;
          break;
  }
  fromIndex = route.findIndex(
    (x) => x == from
  );
  toIndex = route.findIndex(
    (x) => x == to
  );
    if(toIndex>fromIndex){
      end=route[route.length-1]
    }
    else{
      end=route[0];
    }

    return end;

  }
  getColor(from:Station,to:Station):string{
    let color=''; 
    if(from.isRed &&to.isRed){
      color='Red';
    }
    else if(from.isGreen &&to.isGreen){
      color='Green';
    }
    else if(from.isBlue &&to.isBlue){
      color='Blue';
    } 
    return color;

  }
  BothStationsDifferentRoute() {
    let colorArray:string[]=[];
    let endStops:string[]=[];
    // finding the common station
    this.getCommonStation();
    //finding color array
    colorArray[0]=this.getColor(this.fromStation,this.commonStation);
    colorArray[1]=this.getColor(this.commonStation,this.toStation);
    //finding the end stops
    endStops[0]=this.getEndStation(this.fromStation.stationName,this.commonStation.stationName,colorArray[0]);
    endStops[1]=this.getEndStation(this.commonStation.stationName,this.toStation.stationName,colorArray[1]);
    this.printMessage(
      this.fromStation.stationName,
      this.toStation.stationName,
      colorArray,
      endStops,
      this.commonStation.stationName
    );    
    
  }
  BothStationsSameRoute() {    
    let colorArray:string[]=[];
    let endStops:string[]=[];
    let end='';
    let color=this.getColor(this.fromStation,this.toStation);
    colorArray[0]=color;
    end=this.getEndStation(this.fromStation.stationName,this.toStation.stationName,color);   
    endStops[0]=end;
    this.printMessage(
      this.fromStation.stationName,
      this.toStation.stationName,
      colorArray,
      endStops
    );
  }
  
  printMessage(
    from: string,    
    to: string,
    colorArray:string[],
    endStops: string[],
    common?:string
  ) {
    if(!common){
      this.message='At ' +
      from +
      ', board a ' +
      colorArray[0] +
      ' line metro towards ' +
      endStops[0] +
      ' and get down at ' +
      to +
      '.'
    }
    else{
      this.message='At ' +
      from +
      ', board a ' +
      colorArray[0] +
      ' line metro towards ' +
      endStops[0] +
      ' and get down at ' +
      common +
      '.'+
      ' And then, At ' +
      common +
      ', board a ' +
      colorArray[1] +
      ' line metro towards ' +
      endStops[1] +
      ' and get down at ' +
      to +
      '.'
    }
     
  }
}
