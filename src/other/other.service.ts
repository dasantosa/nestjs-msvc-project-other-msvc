import { Injectable, ConflictException } from '@nestjs/common';
import { OtherDTO } from './entities/other.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class OtherService {
  private others: OtherDTO[] = [
    {
      id: '1',
      name: 'other 1',
      description: 'description 1',
      price: 100,
    },
    {
      id: '2',
      name: 'other 2',
      description: 'description 2',
      price: 200,
    },
    {
      id: '3',
      name: 'other 3',
      description: 'description 3',
      price: 300,
    },
  ];

  getAllOthers() {
    return this.others;
  }

  getOtherById(id: string) {
    return this.others.find((other) => other.id === id);
  }

  createOther(other: OtherDTO) {
    const existingOther = this.others.find((item) => item.id === other.id);

    if (existingOther) {
      throw new RpcException(
        new ConflictException(`An entry with id ${other.id} already exists`),
      );
    }

    this.others.push(other);
    return other;
  }

  deleteOther(id: string) {
    const other = this.others.find((other) => other.id === id);

    if (!other) {
      throw new RpcException(
        new ConflictException(`Other with ID ${id} not found`),
      );
    }

    this.others = this.others.filter((other) => other.id !== id);
    return id;
  }

  updateOther(other: OtherDTO) {
    const existingOther = this.others.find((o) => o.id === other.id);

    if (!existingOther) {
      throw new RpcException(
        new ConflictException(`Other with ID ${other.id} not found`),
      );
    }

    this.others = this.others.map((o) => {
      if (o.id === other.id) {
        return { ...o, ...other };
      }
      return o;
    });

    return other;
  }
}
