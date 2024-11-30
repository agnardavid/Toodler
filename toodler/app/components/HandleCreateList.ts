import { editList, createList } from "../Services/JsonInterpreter";

export const handleCreateList = (
  id: number,
  name: string,
  color: string,
  boardId: number,
  navigation: any,
) => {

  console.log("New list created:", { id, name, color, boardId });

  let newListId: number = createList(boardId); 
  editList(newListId, name, color, boardId); 

  navigation.navigate("AllBoards"); 
};
