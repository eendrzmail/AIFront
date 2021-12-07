import { Bonus } from "./Bonus";

export interface Employee {
    id?: number;
    first_name: string;
    last_name: string;
    position: string;
    salary: number;
    created_at: Date;
    updated_at: Date;
    lastBonus: Bonus | null;
    bonuses: Bonus[];
}

