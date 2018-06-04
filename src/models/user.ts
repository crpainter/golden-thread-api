import { Entity, property, model } from '@loopback/repository';
import { Charity } from '../models/charity';

@model()
export class User extends Entity {
    @property({
        type: 'string',
        id: true
    })
    id: string;

    @property({
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'string'
    })
    password: string;

    @property({
        type: 'Array<Charity>',
    })
    charitiesDonatedTo: Array<Charity>;

    @property({
        type: 'Array<Charity>',
    })
    charitiesNotDonatedTo: Array<Charity>;

    getId() {
        return this.id;
    }
}