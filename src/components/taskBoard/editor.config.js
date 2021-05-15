const editorOption = {
  mode: "balloon",
  fontSize : [
      8, 10, 14, 18, 24, 36
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
    // ["","template","math"]
    // ["font","fontSize","formatBlock"],
    // ["blockquote","bold","underline","italic","strike","subscript","superscript"],
    // ["fontColor","hiliteColor","textStyle","removeFormat","outdent","indent","align","horizontalRule"],
    // ["list","table","link","image","video","audio"],
    // ["fullScreen","showBlocks","codeView","preview","print"],
  ]
}

export default editorOption;