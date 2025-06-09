import { Inject } from '@nestjs/common';
import { MODULE_NAME } from '../../common/constants';

export function InjectSupervisord(): ParameterDecorator {
    return Inject(MODULE_NAME);
}
