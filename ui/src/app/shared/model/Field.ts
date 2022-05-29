import { TypeOfField } from "./TypeOfField";

export class Field {
    entity: string;
    property: string;

    type: TypeOfField;
    label?: string;
    value?: any;        
    required: boolean;
    readonly: boolean;
    order: number;
    group: string;
    
    format?: {key: string, value: any}[]; //Formatos especiales para cada una de las opciones del TypeOfField.. cantDecimal, maxLength..
    options?: {key: string, value: string}[]; //Diferentes opciones para los tipos SELECT, RADIO, CHECKBOX..
    constructor( options: {
        entity?: string;
        property?: string;
        type?: TypeOfField;
        label?: string;
        value?: any;
        required?: boolean;
        readonly?: boolean;
        order?: number;
        group?: string;
        format?: {key: string, value: any}[];
        options?: {key: string, value: string}[];
    } = {}) {
        this.entity = options.entity || '';
        this.property = options.property || '';
        this.type = options.type || TypeOfField.TEXT;
        this.label = options.label || '';
        this.value = options.value || '';
        this.group = options.group || '';
        this.required = !!options.required;
        this.readonly = !!options.readonly;
        this.order = options.order === undefined ? 1 : options.order;
        this.format = options.format || [];
        this.options = options.options || [];
    }
}