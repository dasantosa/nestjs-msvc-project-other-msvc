import { Controller } from '@nestjs/common';
import { HealthService } from './health.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @MessagePattern({ cmd: 'other_health' })
  async getHealth(): Promise<any> {
    return this.healthService.getHealth();
  }

  @MessagePattern({ cmd: 'other_status' })
  async getStatus(): Promise<any> {
    return this.healthService.getStatus();
  }
}
