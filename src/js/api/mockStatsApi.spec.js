import expect from 'expect';
import mockStatsApi, { statWithTranslation } from './mockStatsApi';
import { stats } from './data/stats';
import { translations } from './data/settings';

describe('mockStatApi()', () => {
  it('should return an array of stats on getAllStats()', () => {
    mockStatsApi.getAllStats()
    .then(res => {
      expect(res).toEqual(stats);
    });
  });

  it('should return a stat on getStat()', () => {
    const statId = "1";
    mockStatsApi.getStat(statId)
    .then(res => {
      expect(res).toEqual(stats[1]);
    });
  });

});
