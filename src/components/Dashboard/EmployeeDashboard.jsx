import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div>
      <Header data={data} />
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
