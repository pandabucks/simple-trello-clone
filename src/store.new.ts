import { flow, types } from 'mobx-state-tree'
import { generateRandomId } from './helpers/generateRandomId'

export const Task = types.model({
  id: types.string,
  text: types.string,
})

export const TaskList = types
  .model({
    id: types.string,
    name: types.string,
    tasks: types.array(Task),
  })
  .actions(self => {
    function rename(name: string) {
      self.name = name
    }

    const createTask = flow(function*(text: string) {
      const id: string = yield generateRandomId()
      const task = Task.create({ id, text })
      self.tasks.push(task)
      return task
    })

    function removeTask(id: string) {
      self.tasks.replace(self.tasks.filter(task => task.id !== id))
    }

    return { rename, createTask, removeTask }
  })

export const Board = types
  .model({
    id: types.string,
    name: types.string,
    lists: types.array(TaskList),
  })
  .actions(self => {
    function rename(name: string) {
      self.name = name
    }

    const createList = flow(function* (name: string) {
      const id: string = yield generateRandomId()
      const list = TaskList.create({ id, name, tasks: [] })
      self.lists.push(list)
      return list
    })

    function removeList(id: string) {
      self.lists.replace(self.lists.filter(lists => lists.id !== id))
    }

    return { rename, createList, removeList }
  })

export const Store = types
  .model({
    boards: types.map(Board),
  })
  .actions(self => {
    const createBoard = flow(function* (name: string) {
      const board = Board.create({ id: yield generateRandomId(), name, lists: [] })
      self.boards.set(board.id, board)
      return board
    })

    function removeBoard(id: string) {
      self.boards.delete(id)
    }

    return {
      createBoard,
      removeBoard,
    }
  })