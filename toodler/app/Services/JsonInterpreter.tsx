import jsonData from "../resources/data.json"

// Define the type for a board
interface Board {
  id: number;
  name: string,
  thumbnailPhoto: string,
  description:string,
  isDeleted:boolean
};

interface ListInterface {
  id: number,
  name: string,
  color: string,
  boardId: number,
  isDeleted:boolean
};

interface Task {
  id: number,
  name: string,
  description: string,
  isFinished: boolean,
  listId: number,
  isDeleted:boolean
};

// Type assertions for `jsonData`
let boards: Board[] = jsonData.boards as Board[];
let lists: ListInterface[] = jsonData.lists as ListInterface[];
let tasks: Task[] = jsonData.tasks as Task[];


// Functions for boards

// Create a new board
export const createBoard = (): number => {
  let board: Board = {
    id: Math.max(...boards.map((board) => board.id)) + 1,
    name: "",
    thumbnailPhoto: "",
    description: "",
    isDeleted: false
  }
  boards.push(board);
  return board.id;
};

// Delete a board
export const deleteBoard = (boardId: number): boolean => {
  let deleteBoard = boards.find(board => board.id === boardId);
  if (deleteBoard !== undefined){
    deleteBoard.isDeleted = true;
    return true;
  }
  return false;
};

// Edit a board
export const editBoard = (boardId: number, name:string, photo:string, description:string, isDeleted:boolean = false): boolean => {
  let editBoard = boards.find(board => board.id === boardId);
  if (editBoard !== undefined){
    editBoard.name = name;
    editBoard.thumbnailPhoto = photo;
    editBoard.description = description;
    editBoard.isDeleted = isDeleted;
    return true;
  }
  return false;
};

// Get a specific board by id
export const getBoard = (boardId: number, getDeleted:boolean = false): Board | undefined => {
  if (getDeleted){
    return boards.find(board => board.id === boardId);
  }
  else{
    return boards.find(board => board.id === boardId && board.isDeleted === false);
  }
};

// Get all boards
export const getAllBoards = (getDeleted:boolean = false): Board[] => {
  if (getDeleted){
    return boards.slice();
  }
  return boards.filter(board => !board.isDeleted);
};



// Functions for lists

// Create a list
export const createList = (boardId:number): number => {
  let newList: ListInterface = {
    id: Math.max(...lists.map((list) => list.id)) + 1,
    name: "",
    color: "",
    boardId: boardId,
    isDeleted: false
  };
  lists.push(newList);
  return newList.id;
};

// Delete a list
export const deleteList = (listId: number): boolean => {
  let deleteList = lists.find(list => list.id === listId)
  if (deleteList !== undefined){
    deleteList.isDeleted = true;
    return true;
  }
  return false;
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
export const getList = (listId: number, getDeleted:boolean=false): ListInterface | undefined => {
  if (getDeleted){
    return lists.find(list => list.id === listId);
  }
  return lists.find(list => list.id === listId && list.isDeleted === false);
};

// Get all lists
export const getAllLists = (getDeleted:boolean=false): ListInterface[] => {
  if (getDeleted){
    return lists.slice();
  }
  return lists.filter(list => !list.isDeleted);
};


// Functions for tasks

// Create a task
export const createTask = (listId:number): number => {
  let task: Task = {
    id: Math.max(...tasks.map((task) => task.id)) + 1,
    name: "",
    description: "",
    isFinished: false,
    listId: listId,
    isDeleted:false
  }
  tasks.push(task);
  return task.id;
};

// Delete a task
export const deleteTask = (taskId: number): boolean => {
  let deleteTask = tasks.find(task => task.id === taskId);
  if (deleteTask !== undefined){
    deleteTask.isDeleted = true;
  }
  return false;
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

// Get a specific task by id
export const getTask = (taskId: number, getDeleted:boolean=false): Task | undefined => {
  if (getDeleted){
    return tasks.find(task => task.id === taskId);
  }
  return tasks.find(task => task.id === taskId && task.isDeleted === false);
};

// Get all tasks
export const getAllTasks = (getDeleted:boolean=false): Task[] => {
  if (getDeleted){
    return tasks.slice();
  }
  return tasks.filter(task => !task.isDeleted);
};