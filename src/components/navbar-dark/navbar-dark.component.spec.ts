import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDarkComponent } from './navbar-dark.component';

describe('NavbarComponent', () => {
  let component: NavbarDarkComponent;
  let fixture: ComponentFixture<NavbarDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarDarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
