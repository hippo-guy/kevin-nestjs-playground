import { Injectable } from '@nestjs/common';
import { RatingTableLookup } from '../rating-tables/rating-table-lookup';

@Injectable()
export class AgeRateStep {
  constructor(
    private readonly ratingTableLookup: RatingTableLookup,
  ) {
  }

  calculate() {
    return this.ratingTableLookup.lookup();
  }
}