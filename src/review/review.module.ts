import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductModel } from 'src/product/product.model';
import { ReviewController } from './review.controller';

@Module({
  controllers: [ReviewController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel,
        schemaOptions: {
          collection: 'Review',
        },
      },
    ]),
  ],
})
export class ReviewModule {}
