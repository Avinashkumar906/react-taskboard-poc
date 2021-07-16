const editorOption = {
  mode: "classic",
  fontSize : [
      8, 10, 12, 14, 16, 18, 20, 24, 28, 36
  ],
  katex: "window.katex",
  tabDisable: false,
  height:'100%',
  minHeight : '100%',
  maxHeight: '100%',
  buttonList: [
    ['save', 'undo', 'redo'],
    [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['fontColor', 'hiliteColor', 'textStyle'],
    ['removeFormat'],
    ['outdent', 'indent'],
    ['align', 'horizontalRule', 'lineHeight'],
    ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save', 'template'],
    ['-right', ':r-More Rich-default.more_plus', 'table','list' , 'math', 'imageGallery'],
    ['-right', 'image', 'video', 'audio', 'link'],
  ]
}

export default editorOption;