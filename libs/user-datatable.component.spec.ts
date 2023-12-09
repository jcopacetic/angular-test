import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatTableModule } from "@angular/material/table";
import { UserDataTableComponent } from "./user-datatable.component";

describe("UserDataTableComponent", () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [UserDataTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a table with the correct number of columns", () => {
    const tableElement = fixture.nativeElement.querySelector("table");
    expect(tableElement.querySelectorAll("th").length).toEqual(3);
  });

  it("should have a table with the correct number of rows", () => {
    const tableElement = fixture.nativeElement.querySelector("table");
    expect(tableElement.querySelectorAll("tr").length).toEqual(3);
  });
});
