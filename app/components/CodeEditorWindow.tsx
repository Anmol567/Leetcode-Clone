"use client"
import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code,width,height,savingToLocal }: { onChange: (name: string, value: string) => void, language: string, code: string,width:number,height:number,savingToLocal:boolean }) => {
  const handleEditorChange = (editorCode:string) => {
    onChange("code", editorCode);
  };
  const heightOfEditor=`${height}vh`;
  const offsetHeight=`calc(${height.toPrecision(2)}vh - 8rem)`
  console.log(height,typeof height)
  return (
    <div >
      <Editor
        width={`${width-1.5}vw`}
        height={offsetHeight}
        language={language || "javascript"}
        value={code}
        defaultValue={"//Hello world"}
        theme={"light"}
        onChange={handleEditorChange}
        options={{
                automaticLayout: true,
            }}
      />
      <div className="text-gray-300 px-2 text-sm">{savingToLocal?'Saving ...':'Saved to local'}</div>
    </div>
  );
};
export default CodeEditorWindow;