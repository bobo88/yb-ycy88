import React, { useState } from 'react'
import { Input, Button } from 'antd'
import './index.scss'

const { TextArea } = Input

const CodeRunner = () => {
  const [jsCode, setJsCode] = useState('')
  const [output, setOutput] = useState('')

  const runCode = () => {
    try {
      const userFunction = new Function(jsCode)

      // 捕获 console.log 输出，并显示在页面上
      let consoleOutput = ''
      const originalConsoleLog = console.log
      console.log = function () {
        consoleOutput += Array.from(arguments).join(' ') + '\n'
        originalConsoleLog.apply(console, arguments)
      }

      // 执行用户输入的代码
      userFunction()

      // 将 console.log 的输出显示在页面上
      setOutput(consoleOutput)

      // 恢复 console.log
      console.log = originalConsoleLog
    } catch (error) {
      setOutput('Error:\n' + error.message)
    }
  }

  return (
    <div className="main-box">
      <div className="mb20">
        <label htmlFor="jsCode">1. 请输入JS代码:</label>
      </div>
      <div className="mb20">
        <TextArea
          id="jsCode"
          rows="20"
          cols="50"
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}></TextArea>
      </div>
      <div className="mb20">
        <Button type="primary" onClick={runCode}>
          2. 运行JS代码（查看打印结果）
        </Button>
      </div>

      <div id="output">
        <p>打印结果如下:</p>
        {output}
      </div>
    </div>
  )
}

export default CodeRunner
