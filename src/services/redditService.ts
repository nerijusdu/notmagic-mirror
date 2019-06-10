import { SettingsModule } from '@components/settings';
import { getModule } from '@store';
import api from './api';
import { getConfig } from './configService';

class RedditService {
  get secret() {
    const secrets = getConfig().secrets;
    return secrets ? secrets.reddit : '';
  }

  async getWallpapers() {
    const subreddit = getModule(SettingsModule).background.subreddit;
    const res = await api.get({
      url: `https://www.reddit.com/r/${subreddit}/top/.json?t=day`
    });

    if (!res) {
      return [];
    }

    const posts = res.data.data.children;
    const  images = posts
      .filter((x: any) => x.data.post_hint === 'image')
      .map((x: any) => ({
        url: x.data.url,
        name: x.data.title
      }));

    return images;
  }
}

const instance = new RedditService();
export default instance;
