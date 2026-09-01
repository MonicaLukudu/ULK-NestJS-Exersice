import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    BadRequestException,
} from '@nestjs/common'

@Injectable()
export class PositiveIntPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number {
        const parsedValue = Number(value);

        const isValidNumber = !Number.isNaN(parsedValue);
        const IsInteger = Number.isInteger(parsedValue);
        const isPostive = parsedValue > 0;

        if(!isValidNumber  || !IsInteger || !isPostive){
            throw new BadRequestException(
                `Validation failed for parameter "${metadata.data}": `+
                `expected a positive integer, recevied "${value}"`,
            );
        }
        return parsedValue;
    }
}