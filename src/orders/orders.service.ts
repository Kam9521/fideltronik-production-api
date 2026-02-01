import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderStatus } from '@prisma/client';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';





@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException(`Order with id=${id} not found`);
    }

    return order;
  }

  async create(orderData: {
    orderNumber: string;
    productName: string;
    quantity: number;
    status?: OrderStatus;
  }) {
    return this.prisma.order.create({
      data: {
        orderNumber: orderData.orderNumber,
        productName: orderData.productName,
        quantity: orderData.quantity,
        status: orderData.status ?? OrderStatus.PLANNED,
      },
    });
  }

  async updateStatus(id: number, status: OrderStatus) {
    await this.findOne(id);

    return this.prisma.order.update({
      where: { id },
      data: { status },
    });
  }

  async update(id: number, dto: UpdateOrderStatusDto) {
    return this.prisma.order.update({
      where: { id },
      data: dto,
    });
  }
}
