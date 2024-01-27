import React, { useState, useEffect } from 'react'
import { Input, Button } from 'antd'
import * as monaco from 'monaco-editor'
// import 'monaco-editor/esm/vs/editor/editor.all.css' // 引入 Monaco Editor 样式
import './index.scss'

const { TextArea } = Input

const CodeRunner = () => {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')

  const transpileAndCheckTypes = async (tsCode) => {
    try {
      console.log('🚀 ~ transpileAndCheckTypes ~ tsCode:', tsCode)
      // Monaco editor 已经集成了 TypeScript
      const model = monaco.editor.createModel(tsCode, 'typescript')
      console.log('🚀 ~ transpileAndCheckTypes ~ model:', model)
      const uri = model.uri
      console.log('🚀 ~ transpileAndCheckTypes ~ uri:', { ...uri })

      const compilerOptions = {
        target: monaco.languages.typescript.ScriptTarget.ES5,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        jsx: monaco.languages.typescript.JsxEmit.React,
        noEmitOnError: true,
        strict: true,
        noImplicitAny: true,
        strictNullChecks: true
      }
      console.log(
        '🚀 ~ transpileAndCheckTypes ~ compilerOptions:',
        compilerOptions
      )

      // 使用 TypeScript Worker
      const worker = await monaco.languages.typescript.getTypeScriptWorker()
      console.log('🚀 ~ transpileAndCheckTypes ~ worker:', worker)
      console.log('🚀 ~ transpileAndCheckTypes ~ monaco:', monaco)
      const client = await worker()
      console.log('🚀 ~ transpileAndCheckTypes ~ client:', client)

      const result = await client.getEmitOutput(uri.toString())
      console.log('🚀 ~ transpileAndCheckTypes ~ result:', result)
      const jsCode = result.outputFiles[0].text
      console.log('🚀 ~ transpileAndCheckTypes ~ jsCode:', jsCode)

      return { success: true, jsCode }
    } catch (error) {
      return { success: false, errorMessage: error.message }
    }
  }

  const runCode = async () => {
    try {
      const { jsCode, success, errorMessage } = await transpileAndCheckTypes(
        code
      )

      if (!success) {
        setOutput('TypeScript Error:\n' + errorMessage)
        return
      }

      // 执行用户输入的代码
      eval(jsCode)

      // 捕获 console.log 输出，并显示在页面上
      let consoleOutput = ''
      const originalConsoleLog = console.log
      console.log = function () {
        // 将 console.log 的输出记录到 consoleOutput 变量中
        consoleOutput += Array.from(arguments).join(' ') + '\n'
        // 然后调用原始的 console.log
        originalConsoleLog.apply(console, arguments)
      }

      // 执行用户输入的代码
      eval(jsCode)

      // 将 console.log 的输出显示在页面上
      setOutput(consoleOutput)

      // 恢复 console.log，确保不影响其他部分的代码
      console.log = originalConsoleLog
    } catch (error) {
      // 如果在执行过程中发生错误，将错误信息显示在页面上
      setOutput('Error:\n' + error.message)
    }
  }

  useEffect(() => {
    // 明确指定 TypeScript Worker 路径
    monaco.languages.typescript.typescriptDefaults.setWorkerOptions({
      baseUrl: '/node_modules/monaco-editor/min/',
      paths: {
        'vs/language/typescript/tsWorker': 'vs/language/typescript/tsWorker.js'
      }
    })
  }, [])

  return (
    <div className="main-box">
      <div className="mb20">
        <label htmlFor="jsCode" className="f20">
          1. 请输入JS/TS代码:
        </label>
        <p className="tips">备注：TS代码不做转换校验</p>
      </div>
      <div className="mb20">
        <TextArea
          id="jsCode"
          rows="20"
          cols="50"
          value={code}
          onChange={(e) => setCode(e.target.value)}></TextArea>
      </div>
      <div className="mb20">
        <Button type="primary" onClick={runCode}>
          2. 运行JS/TS代码（查看打印结果）
        </Button>
      </div>

      <div id="output">
        <p className="f20">打印结果如下:</p>
        {output}
      </div>
    </div>
  )
}

export default CodeRunner
