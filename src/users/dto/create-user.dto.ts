import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'hannah@gamil.com',
    description: 'email',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: 'hannah',
    description: 'nickname',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: 'hannah1234',
    description: 'password',
    required: true,
  })
  public password: string;
}
