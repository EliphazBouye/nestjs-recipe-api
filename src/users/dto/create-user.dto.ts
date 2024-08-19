import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
    message: 'First name is to short. Minimal length is $contraint3 characters, but actual is $value',
  })
  @ApiProperty()
  firstName: string;
  
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
    message: 'Last nameis to short.  Minimal length is $contraint3 characters, but actual is $value',
  })
  @ApiProperty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
    message: 'Username is to short.  Minimal length is $contraint3 characters, but actual is $value',
  })
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @MinLength(10, {
    message: 'Password is to short.  Minimal length is $contraint2 characters, but actual is $value',
  })
  @ApiProperty()
  password: string;
}
