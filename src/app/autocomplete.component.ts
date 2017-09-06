import { AdresseService } from './adresse.service';
import { Etape } from './etape';
import { Route } from './route';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CompleterCmp, CompleterService, RemoteData, CompleterItem } from 'ng2-completer';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [AdresseService],
})

export class AutocompleteComponent implements OnInit {

  @ViewChild('openCloseExample') private openCloseExample: CompleterCmp;
  selectedRoute: Route;
  etapes: Array<string>;
  coordonneesEtape: Array<Etape>;
  private dataService: RemoteData;
  private dataService2: RemoteData;
  private dataService3: RemoteData;
  protected request;
  private adresse = '';
  private adresse2 = '';
  private adresse3 = '';
  private distance = '';
  private duree = '';
  private departX = '';
  private departY = '';
  private arriveeX = '';
  private arriveeY = '';
  private quote: string | undefined = '';
  private isOpen = false;

  constructor(private completerService: CompleterService, http: Http, private adresseService: AdresseService) {
  this.dataService = completerService.remote(null, 'properties.label', 'properties.label');
    this.dataService.urlFormater(term => {
      return 'https://api-adresse.data.gouv.fr/search/?q=' + term + '&limit=15' ;
    });
    this.dataService.dataField( 'features' );

    this.dataService2 = completerService.remote(null, 'properties.label', 'properties.label');
    this.dataService2.urlFormater(term => {
      return 'https://api-adresse.data.gouv.fr/search/?q=' + term + '&limit=15' ;
    });
    this.dataService2.dataField( 'features' );

    this.dataService3 = completerService.remote(null, 'properties.label', 'properties.label');
    this.dataService3.urlFormater(term => {
      return 'https://api-adresse.data.gouv.fr/search/?q=' + term + '&limit=15' ;
    });
    this.dataService3.dataField( 'features' );
  };

    public onSelectedDepart(selected: CompleterItem) {
        if ( selected != null) {
          this.departX = selected.originalObject.geometry.coordinates[0];
          this.departY = selected.originalObject.geometry.coordinates[1];
          if (this.etapes.length > 1) {
            this.etapes.splice(0, 1);
          }
          this.etapes.splice(0, 0, selected.title);
          if (this.adresse !== '' && this.adresse2 !== '') {
             this.getDistance();
          } else {
              this.selectedRoute = null;
          }
          this.dataService.dataField( 'features' );
      }else {
          this.selectedRoute = null;
        }
    }

    public onSelectedArrivee(selected: CompleterItem) {
        if ( selected != null) {
          this.arriveeX = selected.originalObject.geometry.coordinates[0];
          this.arriveeY = selected.originalObject.geometry.coordinates[1];
          if (this.etapes.length > 1) {
            this.etapes.splice(this.etapes.length - 1, 1);
          }
          this.etapes.splice(this.etapes.length, 0, selected.title);
          if (this.adresse !== '' && this.adresse2 !== '') {
              this.getDistance();
          } else {
              this.selectedRoute = null;
          }
      }else {
          this.selectedRoute = null;
        }
    }

  public onSelectedEtape(selected: CompleterItem) {
        if ( selected != null) {
          const etape = new Etape;
          etape.x = selected.originalObject.geometry.coordinates[0];
          etape.y = selected.originalObject.geometry.coordinates[1];
          this.coordonneesEtape.push(etape);
          this.etapes.splice(this.etapes.length - 1, 0, selected.title);
          if (this.adresse !== '' && this.adresse2 !== '') {
              this.getDistance();
          } else {
              this.selectedRoute = null;
          }
        }
    }

    public onOpened(isOpen: boolean) {
        this.isOpen = isOpen;
    }

    public onToggle() {
        if (this.isOpen) {
            this.openCloseExample.close();
        } else {
            this.openCloseExample.open();
            this.openCloseExample.focus();
        }
    }

    public onFocus() {
        this.openCloseExample.focus();
    }
  getDistance(): void {
  this.adresseService.getDistance(this.departX, this.departY, this.arriveeX, this.arriveeY, this.coordonneesEtape)
    .then(routes => this.selectedRoute =  routes[0]);
  }

  ngOnInit(): void {
    this.etapes = new Array<string>();
    this.coordonneesEtape = new Array<Etape>();
    return;
  }

  public onSupress(index: number) {
    this.coordonneesEtape.splice(index - 1, 1);
    this.etapes.splice(index, 1);
    this.getDistance();
  }
}




