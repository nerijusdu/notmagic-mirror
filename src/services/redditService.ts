import api from '@services/api';
import { getConfig } from './configService';

const subreddit: string = 'pics'; // TODO: move to settings

class RedditService {
  get secret() {
    const secrets = getConfig().secrets;
    return secrets ? secrets.reddit : '';
  }

  async getWallpapers() {
    const res = await api.get({
      url: `https://www.reddit.com/r/${subreddit}/top/.json?t=day`
    });

    if (!res) {
      return [];
    }

    const posts = res.data.data.children;
    const  images = posts
      .filter((x: any) => x.data.post_hint === "image")
      .map((x: any) => ({
        url: x.data.url,
        name: x.data.title
      }));

    return images;
  }
}

const instance = new RedditService();
export default instance;