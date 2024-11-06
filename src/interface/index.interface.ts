export interface IUser {
    username: string;
    email: string;
    age: number;
    country: string;
    password: string;
    total_point?: number;  // Opcional, ya que no todos los usuarios pueden tener un puntaje total
    assistant_name: string;
    assistant_image: string;
}

export interface IUser{
    username: string;
    email: string;
    age: number;
    country: string;
    password: string;
    assistant_name: string;
    assistant_image: string;
}