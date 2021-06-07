import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get(AppService);
  });

  describe('root', () => {
    it('should say goodbye', () => {
      expect(appService.getGoodbye()).toMatchInlineSnapshot(
        `"That's all folks!"`,
      );
    });
  });
});
