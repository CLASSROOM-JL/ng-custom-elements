import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomElementWidgetNewsComponent } from './custom-element-widget-news.component';

describe('CustomElementWidgetNewsComponent', () => {
  let component: CustomElementWidgetNewsComponent;
  let fixture: ComponentFixture<CustomElementWidgetNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomElementWidgetNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomElementWidgetNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
