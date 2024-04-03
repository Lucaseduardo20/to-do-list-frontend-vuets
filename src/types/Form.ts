export interface Form {
    fields: Array<Fields>;
    handleSubmit?: Function | void;
    handleChange: Function | void;
}

export interface Fields {
    label: string;
    type: string;
    id: string;
    model: string;
    cols: number;
}