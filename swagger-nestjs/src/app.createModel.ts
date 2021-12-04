import { ApiProperty } from "@nestjs/swagger";

export class CreateSampleModel {
    @ApiProperty()
    readonly note: string;
}