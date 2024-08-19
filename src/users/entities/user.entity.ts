import { ApiProperty } from "@nestjs/swagger";

export class User {
  @ApiProperty({ example: 'John', description: 'First name of user' })
  firstName: string;
  
  @ApiProperty({ example: 'Doe', description: 'Last name of user' })
  lastName: string;

  @ApiProperty({ example: 'johndoe', description: 'Username of user' })
  username: string;

  @ApiProperty({ example: 'johndoe@mail.com', description: 'The email of user' })
  email: string;

  @ApiProperty({ example: '********', description: 'Password of user min 8 characters' })
  password: string;
}
