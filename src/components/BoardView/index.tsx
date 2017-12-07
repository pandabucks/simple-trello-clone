import { observer } from 'mobx-react'
import * as React from 'react'
import { BoardModel } from '../../store.new'
import { QuickInput } from '../QuickInput/index'
import { TaskList } from '../TaskList'
import { TaskLists, Title } from './styles'

type Props = {
  board: (typeof BoardModel.Type)
  onNewList: (name: string) => void
}

@observer
export class BoardView extends React.Component<Props> {
  render() {
    const { board } = this.props
    return (
      <React.Fragment>
        <Title>{board.name}</Title>
        <TaskLists>
          {board.lists.map(list => (
            <TaskList
              key={list.id}
              taskList={list}
              onNewTask={list.createTask.bind(list)}
              onTaskRemoved={list.removeTask.bind(list)}
              onRemove={board.removeList.bind(board)}
            />
          ))}
          <QuickInput placeholder="Create new list..." onConfirm={this.props.onNewList} />
        </TaskLists>
      </React.Fragment>
    )
  }
}
