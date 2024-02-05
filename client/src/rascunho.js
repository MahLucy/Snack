<div
  id="carrinhoTras"
  ref={provided.innerRef}
  // style={getListStyle(snapshot.isDraggingOver)}
  {...provided.droppableProps}
>
  {carrinho.map((snack, x) => (
                    // <Draggable
                    //   key={snacks.id}
                    //   draggableId={`${snack.id}`}
                    //   index={x}
                    // >
                    // {(provided, snapshot) => (
  <img 
  id="imgCarrinhoTras" 
  src={CarTras}
  ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    />
                    // )}
                    // </Draggable> />
</div>;
