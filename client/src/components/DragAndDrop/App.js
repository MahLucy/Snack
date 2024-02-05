import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const onDragStart = useCallback(() => {
    //estante: fileiras e coluna
  }, []);
  const onDragEnd = useCallback(() => {
    // carrinho
  }, []);

  return (
    <DragDropContext  //encapsulamento de onde são os itens arrastados e onde ele será colocado
      onDragStart={onDragStart}
      
      onDragEnd={onDragEnd}
    >
    </DragDropContext>
  );
};

export default App;