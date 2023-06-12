import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class Market {
    constructor(props?: Partial<Market>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    asset!: string

    @Index_()
    @Column_("text", {nullable: false})
    market!: string

    @Column_("text", {nullable: false})
    marketKey!: string
}
