import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthModule} from "./resources/auth/auth.module";
import {NoteModule} from "./resources/note/note.module";
@Module({
  imports: [
    AuthModule,
    NoteModule,
    Terminus
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
