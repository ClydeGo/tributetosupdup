import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectedStockPage } from './selected-stock.page';

describe('SelectedStockPage', () => {
  let component: SelectedStockPage;
  let fixture: ComponentFixture<SelectedStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedStockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
