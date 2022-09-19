import 'lib/WindowManager'

describe('WindowManager', () => {
  it('attaches itself to global window object', async () => {
    expect(Object.hasOwnProperty.call(window, 'WindowManager')).toBeTruthy()
  })

  describe('methods', () => {
    it('defines openWindow()', async () => {
      expect(typeof window.WindowManager.openWindow).toBe('function')
    })
    it('defines close()', async () => {
      expect(typeof window.WindowManager['close']).toBe('function')
    })
    it('defines popThisWndowFromParent()', async () => {
      expect(typeof window.WindowManager.popThisWindowFromParent).toBe('function')
    })
    it('defines recursivelyCloseChildren()', async () => {
      expect(typeof window.WindowManager.recursivelyCloseChildren).toBe('function')
    })
    it('defines init()', async () => {
      expect(typeof window.WindowManager.init).toBe('function')
    })
    it('defines newUnloadCallback()', async () => {
      expect(typeof window.WindowManager['newUnloadCallback']).toBe('function')
    })
    it('defines hasChildren', async () => {
      expect(typeof window.WindowManager['hasChildren']).toBe('boolean')
    })
    it('defines setChild()', async () => {
      expect(typeof window.WindowManager['setChild']).toBe('function')
    })
    it('defines handleUnload()', async () => {
      expect(typeof window.WindowManager['handleUnload']).toBe('function')
    })
  })

  it('stores reference to child windows', () => {
    const spy = jest.spyOn(window, 'open')
    const dF: Window = {} as Window
    spy.mockReturnValue(dF)

    window.WindowManager.openWindow({ link: '', name: '' })

    expect(window.open()).toBe(dF)
    expect(window.WindowManager['hasChildren']).toBeTruthy()
  })
})
