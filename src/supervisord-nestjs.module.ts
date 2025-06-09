import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { MODULE_NAME } from './common/constants';
import { createSupervisordFactory } from './common/utils';
import {
    ASYNC_OPTIONS_TYPE,
    ConfigurableModuleClass,
    MODULE_OPTIONS_TOKEN,
    OPTIONS_TYPE,
} from './supervisord-nestjs.builder';
import { ModuleRef } from '@nestjs/core';
import { ISupervisordModuleOptions } from './interfaces';
import { SupervisordClient } from 'node-supervisord';

@Global()
@Module({})
export class SupervisordNestjsModule extends ConfigurableModuleClass {
    constructor(private readonly moduleRef: ModuleRef) {
        super();
    }

    public static forRoot(options: typeof OPTIONS_TYPE): DynamicModule {
        const SupervisordNameProvider: Provider = {
            provide: MODULE_NAME,
            useValue: MODULE_NAME,
        };

        const SupervisordProvider: Provider = {
            provide: MODULE_NAME,
            useFactory: (): SupervisordClient => createSupervisordFactory(options),
        };

        const { providers, exports, ...rest } = super.forRoot(options);

        return {
            providers: [...(providers ?? []), SupervisordNameProvider, SupervisordProvider],
            exports: [...(exports ?? []), SupervisordNameProvider, SupervisordProvider],
            ...rest,
        };
    }

    public static forRootAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
        const SupervisordNameProvider: Provider = {
            provide: MODULE_NAME,
            useValue: MODULE_NAME,
        };

        const SupervisordProvider: Provider = {
            provide: MODULE_NAME,
            useFactory: (options: ISupervisordModuleOptions): SupervisordClient =>
                createSupervisordFactory(options),
            inject: [MODULE_OPTIONS_TOKEN],
        };

        const { providers, exports, ...rest } = super.forRootAsync(options);

        return {
            providers: [...(providers ?? []), SupervisordNameProvider, SupervisordProvider],
            exports: [...(exports ?? []), SupervisordNameProvider, SupervisordProvider],
            ...rest,
        };
    }
}
