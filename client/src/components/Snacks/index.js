import _ from "lodash";
import { useGlobalState } from "../../hooks/globalState";
import "./style.scss";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { getItemStyle, getListStyle } from "../../helpers/dragAndDrop";

export default function Snacks() {
  const { snacksDinamic } = useGlobalState();

  return (
    <div className="segunda-metade">
      <div className="estante">
        {snacksDinamic.fileiras.map((fileira, i) => (
          <Droppable key={`fileiras-${i}`} droppableId={`fileiras-${i}`}>
            {(provided, snapshot) => (
              <div
                className={`fileira f${i + 1}`}
                ref={provided.innerRef}
                // style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {fileira.map((snack, i) => (
                  <Draggable
                    key={snack.id}
                    draggableId={`${snack.id}`}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="coluna"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        // style={getItemStyle(
                        //   snapshot.isDragging,
                        //   provided.draggableProps.style
                        // )}
                      >
                        <div className="conteudo">
                          <img
                            src={snack.frente}
                            className="snack img-frente"
                          ></img>
                          <img
                            src={snack.meio}
                            className="snack img-meio"
                          ></img>
                          <img
                            src={snack.tras}
                            className="snack img-tras"
                          ></img>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </div>
  );
}
