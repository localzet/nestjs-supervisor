interface ISupervisordConfigOptions {
    username: string;
    password: string;
}

export interface ISupervisordConfig {
    host: string;
    options?: ISupervisordConfigOptions;
}
