import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubReadmeComponent } from './github-readme.component';

describe('GithubReadmeComponent', () => {
  let component: GithubReadmeComponent;
  let fixture: ComponentFixture<GithubReadmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubReadmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubReadmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
