import uniqid from 'uniqid';

export default class NewUser {
   constructor(username, password, email) {
      this.username = username
      this.password = password
      this.email = email
   }
   getUser() {
      const user = {
         id: uniqid(),
         username: this.username,
         password: this.password,
         email: this.email,
         events: []
      }
      return user
   }
}