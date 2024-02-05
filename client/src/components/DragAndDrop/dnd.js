import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

<Droppable droppableId="droppable-1" type="PERSON">
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      
    >
      
      {provided.placeholder}
    </div>
  )}

<Draggable draggableId="draggable-1" index={0}>
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      
    </div>
  )}
</Draggable>;
</Droppable>;