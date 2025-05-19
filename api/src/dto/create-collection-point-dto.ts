import {
    IsString,
    IsArray,
    IsNumber,
    IsUrl,
    MinLength,
    MaxLength,
    IsLatitude,
    IsLongitude,
    ArrayMinSize,
} from "class-validator"

export class CreateCollectionPointDto {
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    name: string

    @IsString()
    @MinLength(5)
    @MaxLength(200)
    address: string

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    materials: string[]

    @IsString()
    @MinLength(3)
    hours: string

    @IsString()
    @MinLength(8)
    phone: string

    @IsUrl()
    website: string

    @IsString()
    @MinLength(10)
    description: string

    @IsNumber()
    @IsLatitude()
    latitude: number

    @IsNumber()
    @IsLongitude()
    longitude: number

    constructor(data: Partial<CreateCollectionPointDto>) {
        Object.assign(this, data)
    }
}
