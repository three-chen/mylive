import './index.scss'

interface Config {
  id: string
  label: string
  type: string
}

export default class PrototypeButton {
  public _el: HTMLButtonElement | HTMLInputElement
  protected _id: string
  protected _label: string
  protected _icon: string
  protected isActivate: boolean
  protected _protobtnClick: () => void
  protected _protobtnMouseEnter: () => void
  protected _protobtnMouseLeave: () => void

  /**
   *
   * @param id 该buttond 的id
   * @param label tooltip中的信息
   * @param icon 图像资源，我这里是svg
   * @param onClick 点击事件
   */
  constructor(config: Config, icon: string, onClick: () => void) {
    const that = this
    that._el = document.createElement('button')
    that._id = config.id
    that._label = config.label
    that._icon = icon
    that.isActivate = false
    that._protobtnClick = onClick

    that._protobtnMouseEnter = () => {
      // toolbar-button
      that._el.classList.add('richText-toolbar-button-hover')

      // tooltip
      // that._el.children[0].classList.remove('richText-toolbar-button-tooltip-inactive')
      // that._el.children[0].classList.add('richText-toolbar-button-tooltip-active')
    }
    that._protobtnMouseLeave = () => {
      // toolbar-button
      that._el.classList.remove('richText-toolbar-button-hover')

      // tooltip
      // that._el.children[0].classList.remove('richText-toolbar-button-tooltip-active')
      // that._el.children[0].classList.add('richText-toolbar-button-tooltip-inactive')
    }
    that.init(that._el, config.type)
  }

  public init(el: HTMLButtonElement, type: string) {
    const that = this
    // button
    el.classList.add('richText-toolbar-button')
    el.id = that._id
    // el.addEventListener('click', () => {
    //   that.isActivate = !that.isActivate
    //   if (that.isActivate) {
    //     el.classList.add('richText-toolbar-button-active')
    //   } else {
    //     el.classList.remove('richText-toolbar-button-active')
    //   }
    // })

    // tooltip
    // const tootip = document.createElement('div')
    // tootip.innerText = that._label
    // tootip.classList.add('richText-toolbar-button-tooltip')
    // tootip.classList.add('richText-toolbar-button-tooltip-inactive')
    // el.appendChild(tootip)

    // // tooltip event
    // el.addEventListener('mouseenter', that._protobtnMouseEnter)
    // el.addEventListener('mouseleave', that._protobtnMouseLeave)

    // icon
    const icon = document.createElement('div')
    icon.classList.add('richText-toolbar-button-icon')
    icon.innerHTML = that._icon
    el.appendChild(icon)

    // input
    switch (type) {
      case 'button':
        el.addEventListener('click', that._protobtnClick)
        break
      case 'input':
        const input = document.createElement('input')
        input.classList.add('richText-toolbar-button-input')
        input.type = 'file'
        input.accept = 'image/*' // 限制只能选择图片文件

        el.appendChild(input)
        el.addEventListener('click', that._protobtnClick)
        break

      default:
        break
    }
  }

  /**
   * 如果document.getSelection()没有光标，将光标设置为editor元素的末尾，如果有光标，则还是原来的
   * @param editor 给editor元素设置光标
   */
  public setSelection(editor: HTMLDivElement) {
    const sel = window.getSelection()

    if (sel!.focusNode === null) {
      const range = document.createRange()
      range.selectNodeContents(editor)
      range.collapse(false) // 将光标折叠到末尾
      sel!.removeAllRanges()
      sel!.addRange(range)
    }
  }
}
