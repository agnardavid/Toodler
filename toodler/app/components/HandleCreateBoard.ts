import { editBoard, createBoard } from "../Services/JsonInterpreter";

export const handleCreateBoard = (
  name: string,
  image: string,
  description: string,
  navigation: any
) => {

  console.log("New board created:", { name, description, image });

  let newBoardId: number = createBoard(); 
  editBoard(newBoardId, name, image, description); 

  navigation.navigate("AllBoards"); 
};
