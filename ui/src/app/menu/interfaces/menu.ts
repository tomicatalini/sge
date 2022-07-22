export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    options?: {key: string, value: string}[];
    subState?:string;
}