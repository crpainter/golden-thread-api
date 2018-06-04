import { Entity, property, model } from '@loopback/repository';

@model()
export class Charity extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'string'
    })
    desc: string;

    @property({
        type: 'string',
    })
    logourl: string;

    @property({
        type: 'string',
    })
    siteurl: string;

    @property({
        type: 'number',
    })
    userDonationTotal: number;

    getId() {
        return this.id;
    }
}