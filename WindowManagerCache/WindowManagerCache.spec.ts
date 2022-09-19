import WindowManagerCache from './index'

describe('WindowManagerCache', () => {
  const windowManagerCache = new WindowManagerCache(window)
  describe('Methods', () => {
    it('impliments removeItemFromCache()', () => {
      expect(typeof windowManagerCache.removeItemFromCache).toBe('function')
    })
    it('impliments addItemToCache()', () => {
      expect(typeof windowManagerCache.addItemToCache).toBe('function')
    })
    it('impliments getCache()', () => {
      expect(typeof windowManagerCache.getCache).toBe('function')
    })
    it('impliments init()', () => {
      expect(typeof windowManagerCache.init).toBe('function')
    })
    it('impliments hardSetCache()', () => {
      expect(typeof windowManagerCache['hardSetCache']).toBe('function')
    })
    it('impliments clearCache()', () => {
      expect(typeof windowManagerCache['clearCache']).toBe('function')
    })
    it('impliments updateStorage()', () => {
      expect(typeof windowManagerCache['updateStorage']).toBe('function')
    })
    it('impliments getFromStorage()', () => {
      expect(typeof windowManagerCache['getFromStorage']).toBe('function')
    })
  })
})
