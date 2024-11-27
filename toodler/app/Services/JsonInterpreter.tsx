import jsonData from "../resources/data.json"

// Define the type for a board
interface Board {
  id: number;
  name: string,
  thumbnailPhoto: string,
  description:string
};

interface ListInterface {
  id: number,
  name: string,
  color: string,
  boardId: number
};

interface Task {
  id: number,
  name: string,
  description: string,
  isFinished: boolean,
  listId: number
};

// Type assertions for `jsonData`
let boards: Board[] = jsonData.boards as Board[];
let lists: ListInterface[] = jsonData.lists as ListInterface[];
let tasks: Task[] = jsonData.tasks as Task[];


// Functions for boards

// Create a new board
export const createBoard = (board: Board): void => {
  board.id = Math.max(...boards.map((board) => board.id)) + 1;
  boards.push(board);
};

// Delete a board
export const deleteBoard = (boardId: number): void => {
  boards = boards.filter(board => board.id !== boardId)
};

// Edit a board
export const editBoard = (boardId: number, name:string, photo:string, description:string): boolean => {
  let editBoard = boards.find(board => board.id === boardId);
  if (editBoard !== undefined){
    editBoard.name = name;
    editBoard.thumbnailPhoto = photo;
    editBoard.description = description;
    return true;
  }
  return false;
};

// Get a specific board by id
export const getBoard = (boardId: number): Board | undefined => {
  return boards.find(board => board.id === boardId);
};

// Get all boards
export const getAllBoards = (): Board[] => {
  return boards.slice();
};



// Functions for lists

// Create a list
export const createList = (list: ListInterface): void => {
  list.id = Math.max(...lists.map((list) => list.id)) + 1;
  lists.push(list);
};

// Delete a list
export const deleteList = (listId: number): void => {
  lists = lists.filter(list => list.id !== listId)
};

// Edit a list
export const editList = (listId: number, name:string, color:string, boardId:number): boolean => {
  let editList = lists.find(list => list.id === listId);
  if (editList !== undefined){
    editList.name = name;
    editList.color = color;
    editList.boardId = boardId;
    return true;
  }
  return false;
};

// Get a specific list by id
export const getList = (listId: number): ListInterface | undefined => {
  return lists.find(list => list.id === listId);
};

// Get all lists
export const getAllLists = (): ListInterface[] => {
  return lists.slice();
};


// Functions for tasks

// Create a task
export const createTask = (task: Task): void => {
  task.id = Math.max(...tasks.map((task) => task.id)) + 1;
  tasks.push(task);
};

// Delete a task
export const deleteTask = (taskId: number): void => {
  tasks = tasks.filter(task => task.id !== taskId)
};

interface Task {
  id: number,
  name: string,
  description: string,
  isFinished: boolean,
  listId: number
};

// Edit a task
export const editTask = (taskId: number, name:string, description:string, isFinished:boolean, listId:number): boolean => {
  let editTask = tasks.find(task => task.id === taskId);
  if (editTask !== undefined){
    editTask.name = name;
    editTask.description = description;
    editTask.isFinished = isFinished;
    editTask.listId = listId;
    return true;
  }
  return false;
};

// Get a specific list by id
export const getTask = (taskId: number): Task | undefined => {
  return tasks.find(task => task.id === taskId);
};

// Get all lists
export const getAllTasks = (): Task[] => {
  return tasks.slice();
};