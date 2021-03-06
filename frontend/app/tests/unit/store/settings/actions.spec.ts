import { api } from '@/services/rotkehlchen-api';
import {
  TIMEFRAME_SETTING,
  DEFI_SETUP_DONE,
  TIMEFRAME_ALL,
  TIMEFRAME_REMEMBER,
  LAST_KNOWN_TIMEFRAME,
  QUERY_PERIOD
} from '@/store/settings/consts';
import { FrontendSettingsPayload } from '@/store/settings/types';
import store from '@/store/store';

jest.mock('@/services/rotkehlchen-api');

describe('settings:actions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('updates settings on valid payload', async () => {
    expect.assertions(1);
    await store.dispatch('settings/updateSetting', {
      [DEFI_SETUP_DONE]: true
    } as FrontendSettingsPayload);

    expect(api.setSettings).toHaveBeenCalledWith(
      expect.objectContaining({
        frontend_settings: JSON.stringify({
          [DEFI_SETUP_DONE]: true,
          [TIMEFRAME_SETTING]: TIMEFRAME_REMEMBER,
          [LAST_KNOWN_TIMEFRAME]: TIMEFRAME_ALL,
          [QUERY_PERIOD]: 5
        })
      })
    );
  });

  test('does not update settings on missing payload', async () => {
    expect.assertions(1);
    await expect(
      store.dispatch('settings/updateSetting', {} as FrontendSettingsPayload)
    ).rejects.toBeInstanceOf(Error);
  });
});
