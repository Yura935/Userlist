import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndularUsersListComponent } from './andular-users-list.component';

describe('AndularUsersListComponent', () => {
  let component: AndularUsersListComponent;
  let fixture: ComponentFixture<AndularUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndularUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndularUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
