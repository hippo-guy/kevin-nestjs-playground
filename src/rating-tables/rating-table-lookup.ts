import { Injectable } from '@nestjs/common';

@Injectable()
export class RatingTableLookup {
  lookup() {
    return [2,1,1,1,1,1,1];
  }
}