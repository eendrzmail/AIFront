export interface Worker {
    uid: number,
    name: string;
    surname: string;
    position: string;
    salary: number;
    last_bonus_date: Date | undefined;
}