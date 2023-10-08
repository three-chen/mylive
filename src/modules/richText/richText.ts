import Editor from './editor'
import Toolbar from './toolbar'

class RichText {
  private _el: HTMLElement | null = null

  private _toolbar: Toolbar | null = null
  private _editor: Editor | null = null

  constructor() {}

  public mount(el: HTMLElement) {
    // TODO
    this._el = el
    this._editor = new Editor(this._el)
    this._toolbar = new Toolbar(this._el)
  }

  public getHTML() {
    return this._editor!.getInnerHTML()
  }

  public setHTML(html: string) {
    this._editor!.setInnerHTML(html)
  }

  public clear() {
    this.setHTML('')
  }
}

export default RichText
