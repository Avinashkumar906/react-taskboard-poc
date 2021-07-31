const editorOption = {
  mode: "balloon",
  fontSize : [
      8, 10, 12, 14, 16, 18, 20, 24, 28, 36
  ],
  katex: "window.katex",
  tabDisable: false,
  height:'100%',
  minHeight : '100%',
  maxHeight: '100%',
  videoFileInput: false,
  imageFileInput: false,
  imageGalleryUrl: "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
  buttonList: [
    ['undo', 'redo'],
    ['font', 'fontSize', 'formatBlock'],
    ['bold', 'underline', 'italic', 'strike'],
    [ 'subscript', 'superscript'],['lineHeight'],
    [ 'paragraphStyle', 'textStyle','blockquote', 'horizontalRule'],
    ['fontColor', 'hiliteColor', 'removeFormat'],['outdent', 'indent', 'align' ],
    ['table', 'list'],[ 'image', 'link', 'imageGallery', 'video', 'audio'],
    ['fullScreen', 'showBlocks', 'codeView'],[ 'preview', 'print', 'template'],[ 'math']
  ],
  callBackSave : function (contents, isChanged) {
    console.log('please click save button.')
  }
}
export const toolbarButtons = {
  fontOption:  [['undo', 'redo'],['font', 'fontSize', 'formatBlock'],[ 'paragraphStyle', 'textStyle','blockquote', 'horizontalRule']],
  fontStyle: [['undo', 'redo'],['bold', 'underline', 'italic', 'strike'],[ 'subscript', 'superscript'],['lineHeight']],
  fontFormat: [['undo', 'redo'],['fontColor', 'hiliteColor', 'removeFormat']['outdent', 'indent', 'align' ]],
  additional: [['undo', 'redo'],['table', 'list'],[ 'image', 'link', 'imageGallery', 'video', 'audio']],
  addOn: [['undo', 'redo'],['fullScreen', 'showBlocks', 'codeView'],[ 'preview', 'print', 'template'],[ 'math']],
}
export default editorOption;