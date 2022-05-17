import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { DynamicHookDirective } from 'src/app/shared/dynamic-hook.directive';
import { AddUserComponent } from 'src/app/includes/add-user/add-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  allUsers: User[];
  userSubscription: Subscription;
  closeSubscription: Subscription;
  dataSource: MatTableDataSource<User>;
  @ViewChild(DynamicHookDirective) cmpHost: DynamicHookDirective;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this._userService._userSubject.subscribe((x) => {
      this.allUsers = x;
      this.dataSource = new MatTableDataSource(x);
    });
  }

  displayedColumns: string[] = [
    // 'no',
    'name',
    'email',
    'department',
    'salary',
    'date',
  ];

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openAddUserForm() {
    this.cmpHost.viewContainerRef.clear();
    const addUserCmp =
      this.cmpHost.viewContainerRef.createComponent(AddUserComponent);
    this.closeSubscription = addUserCmp.instance.popupCloseEvent.subscribe(
      () => {
        this.closeSubscription.unsubscribe(),
          this.cmpHost.viewContainerRef.clear();
      }
    );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
