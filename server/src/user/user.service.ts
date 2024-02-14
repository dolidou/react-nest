import { Injectable } from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repo/user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository,private jwtService: JwtService, // Injectez JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    let user: User = new User();
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.password = createUserDto.password;
    user.role = Constants.ROLES.NORMAL_ROLE;

    // Enregistrez l'utilisateur dans la base de données
    const savedUser = await this.userRepository.save(user);

    // Générez un token JWT
    const payload = {
      userId: savedUser.id,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
      role: savedUser.role,
    };

    const token = this.jwtService.sign(payload);

    // Ajoutez le token à la réponse ou retournez-le comme nécessaire
    return { user: savedUser, token };
  }


  findUserById(id: number) {
    return this.userRepository.findOneOrFail({ where: { id: id } });
  }

  findAll() {
    return this.userRepository.find();
  }

  findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
