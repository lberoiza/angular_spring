import {formatDate} from '@angular/common'
import {environment} from '../../environments/environment'

export class Client {
  id: number | null;
  name: string;
  surname: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  image: string;

  public static of(client: Client):Client{
    return new Client(
      client?.id,
      client?.name,
      client?.surname,
      client?.email,
      client?.createdAt,
      client?.updatedAt,
      client?.image
    );
}


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

  public exist(): boolean {
    return this.id != null;
  }

  public getFullName(): string {
    return `${this.name} ${this.surname}`;
  }

  public getFormatedCreatedAt(){
    return formatDate(this.createdAt, environment.dateFormat, environment.location);
  }

  public getFormatedUpdatedAt(){
    return formatDate(this.updatedAt, environment.dateFormat, environment.location);
  }

}
