import PrototypeButton from './prototype_button'

import { getEditor } from '../store/richTextStore'

const ulSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"></path></svg>`

class UlButton extends PrototypeButton {
  constructor() {
    super({ id: 'ul', label: 'ul', type: 'button' }, ulSVG, () => {
      const editor = getEditor()
      if (editor) {
        this.setSelection(editor)
        document.execCommand('insertUnorderedList', false, null)
      }
    })
  }
}

export default new UlButton()
