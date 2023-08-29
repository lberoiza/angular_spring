export class Client {
  id: number | null;
  name: string;
  surname: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  image: string;


  constructor(id: number | null = null,
              name: string = '',
              surname: string = '',
              email: string = '',
              createdAt: string = '',
              updatedAt: string = '',
              image: string = '') {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.image = image;
  }

  exist(): boolean {
    return this.id != null;
  }

}
