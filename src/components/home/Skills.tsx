import React from 'react'
import { Button, Divider } from 'antd'

const skillList = [
  'Vue',
  'React',
  'Javascript',
  'Typescript',
  'CSS',
  'HTML',
  'Node/Express/Koa',
  'Nginx',
  'Less/Sass',
  'ElementUI',
  'Antd',
  'Vant'
]

const Skills: React.FC = () => {
  return (
    <div className="skills-box mb20">
      <Divider orientation="left">技能</Divider>
      {skillList.map((skill) => (
        <Button key={skill} className="mr20 mb5" type="default">
          {skill}
        </Button>
      ))}
    </div>
  )
}
export default Skills
