interface ISupervisordConfigOptions {
    username: string;
    password: string;
}

export interface ISupervisordModuleOptions {
    host: string;
    options?: ISupervisordConfigOptions;
}
