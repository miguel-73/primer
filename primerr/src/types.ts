export type User = string | ''


export interface UserBase{
    name: string;
    age: number;
    userID: string | number;
}


export interface FootballPlayer extends UserBase{
    TShirtNumber: number
}