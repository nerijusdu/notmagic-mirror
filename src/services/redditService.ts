import axios from 'axios';
import { getConfig } from "./configService";

class RedditService {
  get secret() {
    const secrets = getConfig().secrets;
    return secrets ? secrets.reddit : '';
  }

  getWallpapers() {
    return axios
      .get('https://www.reddit.com/r/pics/top/.json?t=day')
      .then(res => { // TODO: handle failure
        const posts = res.data.data.children;
        const  images = posts
          .filter((x: any) => x.data.post_hint === "image")
          .map((x: any) => ({
            url: x.data.url,
            name: x.data.title
          }));

        return images;
      });
  }
}

const instance = new RedditService();
export default instance;