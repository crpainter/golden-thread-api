import { Entity } from '@loopback/repository';
import { Charity } from '../models/charity';
export declare class User extends Entity {
    id?: number;
    username: string;
    password: string;
    charitiesDonatedTo: Charity[];
    charitiesNotDonatedTo: Charity[];
    getId(): number | undefined;
}
