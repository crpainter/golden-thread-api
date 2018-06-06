import { Entity } from '@loopback/repository';
export declare class CharityProject extends Entity {
    id?: number;
    charity_id: number;
    budget: number;
    getId(): number | undefined;
}
