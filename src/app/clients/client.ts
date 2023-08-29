export class Client {
  id: number = 0;
  name: string = '';
  surname: string = '';
  email: string = '';
  createdAt: string = '';
  updatedAt: string = '';
  image: string = '';


  constructor(id: number, name: string, surname: string, email: string, createdAt: string, updatedAt: string, image: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.image = image;
  }
}
