import React from 'react'
import '@toast-ui/editor/toastui-editor.css'
import {Editor} from '@toast-ui/react-editor'

const OutputSection = () => {
  return (
    <div>
      <Editor
      initialvalue="Hello react editor World!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      />
    </div>
  )
}

export default OutputSection