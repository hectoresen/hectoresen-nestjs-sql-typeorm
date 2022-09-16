import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './config/database/database.module';
import { userProviders } from './users/user.providers';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env',
        '.env.local'
      ]
    }),
    UsersModule, 
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    ...userProviders,
    AppService
  ],
})
export class AppModule {}
