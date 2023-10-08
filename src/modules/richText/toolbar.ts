import BoldButton from "./toolbar_button/bold_button";
import UlButton from "./toolbar_button/ul_button";
import ImageButton from "./toolbar_button/image_button";
import PrototypeButton from "./toolbar_button/prototype_button";

import "./toolbar.scss";

export default class Toolbar {
    private _toolbar: HTMLElement;

    constructor(container: HTMLElement) {
        this._toolbar = document.createElement('div');
        this.init(this._toolbar);
        container.appendChild(this._toolbar);
    }

    public init(toolbar: HTMLElement) {
        toolbar.classList.add('richText-toolbar');
        this.addButton(BoldButton);
        this.addButton(UlButton);
        this.addButton(ImageButton);
    }

    public addButton(button: PrototypeButton) {
        this._toolbar.appendChild(button._el);
    }
}