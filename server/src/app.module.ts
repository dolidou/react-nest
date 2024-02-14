import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import { ArticleModule } from './article/article.module';
import { ArticleFournisseurModule } from './article-fournisseur/article-fournisseur.module';
import { DemandeModule } from './demande/demande.module';
import { DetailDemandeModule } from './detail-demande/detail-demande.module';

// FIND ALL USERS
// ADD USER
// DELETE USER

// ADD TODO BASED ON USER ID
// FIND ALL TODOS BASED ON USER ID (NOT COMPLETED)
// FIND ALL COMPLETED TODOS BASED ON USER ID (COMPLETED)
// MARK TODO AS COMPLETED BASED ON TODO ID
// DELETE TODO  BASED ON TODO ID

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(),'dist/**/*.entity.js')],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TodoModule,
    UserModule,
    AuthModule,
    ClientModule,
    FournisseurModule,
    ArticleModule,
    ArticleFournisseurModule,
    DemandeModule,
    DetailDemandeModule,

  ],

  controllers: [],
  providers: [],
})

export class AppModule {}
