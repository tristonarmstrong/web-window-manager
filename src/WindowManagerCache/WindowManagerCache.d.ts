export interface WindowManagerCacheType {
  /**
   * updates cache to include new window name
   * @param item a window name
   */
  addItemToCache(item: string): void

  /**
   * updates cache to not include a window name
   * @param item a window name
   */
  removeItemFromCache(item: string): void

  /**
   * gets the current cache object from `this.#cache`
   */
  getCache(): CacheObject

  /**
   * Contains all needed initialization logic
   */
  init(): this
}

export interface CacheObject {
  [key: string]: string[]
}
