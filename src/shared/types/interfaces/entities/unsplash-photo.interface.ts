export interface UnsplashPhoto {
  id: string;
  description?: string;
  alt_description: string;
  urls: {
    full: string;
    small: string;
  };
  user: {
    username: string;
  };
}
