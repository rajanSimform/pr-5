import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  hide: boolean = true;
  @Output() popupCloseEvent = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private _userService: UserService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
          ),
        ],
      ],
      dept: [null, [Validators.required]],
      designation: [null, [Validators.required]],
      salary: [null, Validators.required],
    });
  }

  saveDetails(form: FormGroup) {
    const { name, email, password, dept, salary, designation } = form.value;
    const newUser = new User(
      name,
      email,
      password,
      dept,
      salary,
      designation,
      new Date()
    );
    this._userService.addUser(newUser);
    this.closePopup();
  }

  closePopup() {
    this.popupCloseEvent.emit();
  }
}
