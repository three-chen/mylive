let editorStore: HTMLDivElement | null = null

function setEditor(editor: HTMLDivElement) {
    editorStore = editor
}

function getEditor(): HTMLDivElement | null {
    return editorStore
}

export {
    setEditor,
    getEditor,
}