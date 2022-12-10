import {ClientNavigationRoute} from '../../enums';

export interface RouteParams<T = {}> {
  navigation: {
    navigate<P>(to: ClientNavigationRoute, params?: P): void;
    setOptions(options: any): void;
  };
  route: {
    params: T;
  };
}
