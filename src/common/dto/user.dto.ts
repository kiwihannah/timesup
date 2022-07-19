import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class userDto extends CreateUserDto {
  @ApiProperty({
    required: true,
    example: 1,
    description: 'user id',
  })
  id: number;
}
