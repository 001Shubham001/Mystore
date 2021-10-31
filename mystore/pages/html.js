import React, { useRef } from 'react';
import { render } from 'react-dom';

import EmailEditor from 'react-email-editor';

const App = (_props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    const package = {};
    emailEditorRef.current.editor.loadDesign(package);
  }

  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };

  return (
  <Page>
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      <><div id="editor-container"></div><script src="//editor.unlayer.com/embed.js"></script></>
    </div>
    </Page>
  );
};

render(<App />, document.getElementById('app'));