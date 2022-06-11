import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(user: User) {
    console.log('Primary Email: ' + user.primaryEmail);
    console.log('Secondary Email: ' + user.secondaryEmail);
    console.log('Official Email: ' + user.officialEmail);
  }
} 