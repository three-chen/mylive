import './editor.scss'

import { setEditor } from './store/richTextStore'

export default class Editor {
  private _editor: HTMLDivElement | null = null

  constructor(container: HTMLElement) {
    this._editor = document.createElement('div')
    this.init(this._editor)
    setEditor(this._editor)
    container.appendChild(this._editor)
  }

  public init(editor: HTMLElement) {
    const that = this
    editor.classList.add('richText-editor')
    editor.contentEditable = 'true'
  }

  public getInnerHTML(): string {
    return this._editor!.innerHTML
  }

  public setInnerHTML(html: string) {
    this._editor!.innerHTML = html
  }
}
