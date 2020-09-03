export interface Data {
  name: string;
  email: string;
  password:string;
}

export interface User {
  user: Data
}

export interface UserData {
  data: User
}