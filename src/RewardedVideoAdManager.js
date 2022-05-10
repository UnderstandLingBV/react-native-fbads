import { NativeModules } from 'react-native';

const { CTKRewardedVideoAdManager } = NativeModules;

export default {
  loadAd(placementId: string): Promise<boolean> {
    return CTKRewardedVideoAdManager.loadAd(placementId);
  },

  showAd(): Promise<boolean> {
    return CTKRewardedVideoAdManager.showAd();
  },
};