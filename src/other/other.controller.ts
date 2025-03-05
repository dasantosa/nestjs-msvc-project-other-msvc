import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OtherService } from './other.service';
import { OtherDTO } from './entities/other.dto';

@Controller()
export class OtherController {
  constructor(private readonly otherService: OtherService) {}

  @MessagePattern({ cmd: 'get_all_other' })
  getAllOthers() {
    Logger.log('Get all others');
    return this.otherService.getAllOthers();
  }

  @MessagePattern({ cmd: 'get_other_by_id' })
  getOtherById(data: { id: string }) {
    Logger.log('Get other by id');
    return this.otherService.getOtherById(data.id);
  }

  @MessagePattern({ cmd: 'create_other' })
  createOther(data: { otherDTO: OtherDTO }) {
    Logger.log('Create other');
    return this.otherService.createOther(data.otherDTO);
  }

  @MessagePattern({ cmd: 'delete_other' })
  deleteOther(data: { id: string }) {
    Logger.log('Delete other');
    return this.otherService.deleteOther(data.id);
  }

  @MessagePattern({ cmd: 'update_other' })
  updateOther(data: { otherDTO: OtherDTO }) {
    Logger.log('Update other');
    return this.otherService.updateOther(data.otherDTO);
  }
}
