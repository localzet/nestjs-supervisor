import { Logger } from '@nestjs/common';
import { ISupervisordConfig } from './interfaces';
import { SupervisordClient } from 'node-supervisord';

const logger = new Logger('supervisor-nestjs');

export function createSupervisordFactory(moduleOptions: ISupervisordConfig): SupervisordClient {
    const supervisor = new SupervisordClient(moduleOptions.host, moduleOptions.options);
    logger.log(`Supervisord initialized`);
    return supervisor;
}
