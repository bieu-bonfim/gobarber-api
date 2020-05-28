import ICacheProvider from '../models/ICacheProvider';

export default class FakeCacheProvider implements ICacheProvider {
  public async invalidate(key: string): Promise<void> {}

  public async recover(key: string): Promise<string> {
    return key;
  }

  public async save(key: string, value: string): Promise<void> {}

  public async invalidatePrefix(prefix: string): Promise<void> {}
}
