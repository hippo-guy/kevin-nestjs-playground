import { Test, TestingModule } from '@nestjs/testing';
import { AgeRateStep } from '../age.rate-step';
import { RatingTableLookup } from '../../rating-tables/rating-table-lookup';

describe('AgeRateStep', () => {
  let ageRateStep: AgeRateStep;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AgeRateStep,
        RatingTableLookup
      ],
    }).compile();

    ageRateStep = app.get(AgeRateStep);
  });

  describe('calculate', () => {
    it('should return a vector', () => {
      expect(ageRateStep.calculate()).toMatchInlineSnapshot(`
        Array [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
        ]
      `);
    });
  });
});
