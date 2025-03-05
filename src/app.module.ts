import { Module } from '@nestjs/common';
import { OtherController } from './other/other.controller';
import { OtherService } from './other/other.service';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule],
  controllers: [OtherController],
  providers: [OtherService],
})
export class AppModule {}
