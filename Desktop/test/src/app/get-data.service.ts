import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(
    private router: Router
  ) { }

  getMedicine(): Observable<any> {
    const today = new Date();
    const data = [
      {
        "ID": "407",
        "txVersion": 2,
        "prescriptionTime": "2020-02-29 05:05:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Trombosyyttejä yks.",
        "numberOfUnits": 3,
        "comment": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Tuomi Jyrki",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 1,
        "comment": ""
      },
      {
        "ID": "405",
        "txVersion": 1,
        "prescriptionTime": "2020-02-28 12:12:00",
        "professionalName": "Clyde Go",
        "bloodProduct": "Plasmaa yks.",
        "numberOfUnits": 5,
        "comment": ""
      }
    ];
    return of(data);
  }

  openBloodDetail(data: any): void {
    const state = { data };
    let navigationExtras: NavigationExtras = {
        state
    };
    this.router.navigate(['blood-detail'], navigationExtras);
  }

  getBloodDeatil(id: any): Observable<any> {
    const data = {
      "success": true,
      "data": {
        "prescription": {
          "ID": 405,
          "txVersion": 1,
          "prescriptionTime": "2020-02-28 12:12:00",
          "professionalName": "Tuomi Jyrki",
          "bloodProduct": "Plasmaa yks.",
          "numberOfUnits": 1,
          "comment": ""
        },
        "administrations": [
          {
            "ID": "601",
            "txVersion": 1,
            "startTime": "",
            "comment": "",
            "biologicalPreTransfusionCheckDone": false
          }
        ]
      }
    };

    return of(data);
  }
}
