import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  async getHealth(): Promise<any> {
    return 'Other microservice is up and running 🚀!';
  }
  async getStatus(): Promise<any> {
    return 'Other microservice is up and running 🚀!';
  }
}
