import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ISupervisordModuleOptions } from './interfaces';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } =
    new ConfigurableModuleBuilder<ISupervisordModuleOptions>()
        .setFactoryMethodName('forRootAsync')
        .setClassMethodName('forRoot')
        .build();
