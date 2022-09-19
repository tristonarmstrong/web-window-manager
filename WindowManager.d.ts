export interface WindowManagerType {
  /**
   * A wrapper for the window object's native open window function. opens a new window with predefined preset
   * @param _ an object containing a link and name
   */
  openWindow(_: { link: string; name: string }): void

  /**
   * this is called from within a child who wants to pop themselves from their parents child list.
   * To call this, access the parents window manager
   * ``` typescript
   * this.#win.parent.WindowManager.popThisWindowFromParent(this.#win.name)
   * ```
   * @param childWindowName the name of the window to pop, found at ``window.name```
   */
  popThisWindowFromParent(childWindowName: string): void

  /**
   * starting from root node, recursively calls itself on child window instances to traverse the tree until
   * a child is no longer found. Then begins to call `this.#win.close()` on each node until it reaches the root
   * node once again
   * @note this is a multidimensional operation
   * @param id position in the tree of windows: starting with 0 as root node
   */
  recursivelyCloseChildren(id?: number): void

  /**
   * Used on initialization, adds this window instance to the parent at `this.#win.parent` by assigning itself to the parents `child` property
   * @returns WindowManager
   */
  init(): this

  /**
   * Adds a new callback to `this.#unloadCallbacks` which will be invoked during the window unload event
   * @param cb void function that does some work on unload
   */
  newUnloadCallback(cb: () => void): void
}
