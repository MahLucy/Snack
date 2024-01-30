// // import { useCallback, useReducer }
// //     from "react";

// // import React, { useState } from 'react';
// // import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import SnackTur1 from "../images/Turbonomic/turbonomic 1.png"
// import SnackTur2 from "../images/Turbonomic/turbonomic 2.png";
// import SnackTur3 from "../images/Turbonomic/turbonomic 3.png";

// import SnackIns1 from "../images/Instana/instana 1.png";
// import SnackIns2 from "../images/Instana/instana 2.png";
// import SnackIns3 from "../images/Instana/instana 3.png";

// import SnackMax1 from "../images/Maximo/maximo 1.png";
// import SnackMax2 from "../images/Maximo/maximo 2.png";
// import SnackMax3 from "../images/Maximo/maximo 3.png";

// import SnackTurFinal1 from "../images/Turbonomic/turbonomic 1.png";
// import SnackTurFinal2 from "../images/Turbonomic/turbonomic 2.png";
// import SnackTurFinal3 from "../images/Turbonomic/turbonomic 3.png";

// const ImageList = [ 
//     { id: 1 , src: SnackTur1},
//     { id: 2, src: SnackTur2 },
//     { id: 3 , src: SnackTur3 },
//     { id: 4 , src: SnackIns1 },
//     { id: 5 , src: SnackIns2},
//     { id: 6 , src: SnackIns3},
//     { id: 7 , src: SnackMax1},
//     { id: 8 , src: SnackMax2},
//     { id: 9 , src: SnackMax3},
//     { id: 10 , src: SnackTurFinal1},
//     { id: 11 , src: SnackTurFinal2},
//     { id: 12 , src: SnackTurFinal3},
// ];

// import React, { useCallback, useReducer } from "react";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const containerStyle = {
//     marginBottom: "8px",
//     padding: "8px"
// };

// const itemStyle = {
//     margin: "0.9rem",
//     width: "10%",
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "MOVE": {
//             if (!action.to) return state;
//             if (action.to === action.from
//                 && action.toIndex === action.fromIndex) return state;
//             const newState = [...state];
//             const [removedItem] = newState.splice(action.fromIndex, 1);
//             newState.splice(action.toIndex, 0, removedItem);
//             return newState;
//         }
//         default:
//             return state;
//     }
// };

// const DraggableItem = ({ provided, item }) => (
//     <div
//         ref={provided.innerRef}
//         {...provided.draggableProps}
//         {...provided.dragHandleProps}
//     >
//         <img src={item.src} style={itemStyle} alt={`Imagem ${item.id}`} />
//     </div>
// );

// const MinhaComponente = () => {
//     const [state, dispatch] = useReducer(reducer, ImageList);

//     const onDragEnd = useCallback((result) => {
//         if (result.reason === "DROP") {
//             dispatch({
//                 type: "MOVE",
//                 fromIndex: result.source.index,
//                 toIndex: result.destination.index,
//             });
//         }
//     }, []);

//     return (
//         <div style={containerStyle}>
//             <DragDropContext onDragEnd={onDragEnd}>
//                 <Droppable droppableId='ImageList' type='TODO'>
//                     {(provided) => (
//                         <div
//                             ref={provided.innerRef}
//                             {...provided.droppableProps}
//                         >
//                             {state.map((item, index) => (
//                                 <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
//                                     {(provided) => (
//                                         <DraggableItem provided={provided} item={item} />
//                                     )}
//                                 </Draggable>
//                             ))}
//                             {provided.placeholder}
//                         </div>
//                     )}
//                 </Droppable>
//             </DragDropContext>
//         </div>
//     );
// };

// export default MinhaComponente;


// // const containerStyle = {
// //     marginBottom: "8px",
// //     padding: "8px"
// // };

// // const itemStyle = {
// //     margin: "0.9rem",
// //     width: "10%",
// // };

// // export default function App() {
// //     const reducer = (state, action) => {
// //         switch (action.type) {
// //             case "MOVE": {
// //                 if (!action.to) return;
// //                 if (action.to === action.from
// //                     && action.toIndex === action.fromIndex) return;
// //                 const newState = JSON.parse(JSON.stringify(state.ImageList));
// //                 const [removeItem] = newState.splice(action.fromIndex, 1);
// //                 newState.splice(action.toIndex, 0, removeItem);
// //                 return { ImageList: newState };
// //             }
// //         };
// //     };

// //     const [state, dispatch] = useReducer(reducer, { ImageList });

// //     const onDragEnd = useCallback((result) => {
// //         if (result.reason === "DROP") {
// //             dispatch({
// //                 type: "MOVE",
// //                 from: result.source.droppableId,
// //                 to: result.destination.droppableId,
// //                 fromIndex: result.source.index,
// //                 toIndex: result.destination.index,
// //             });
// //         }
// //     }, []);

// //     const DraggableItem = ({ provided, ImageList }) => {
// //         return (
// //             <div
// //                 ref={provided.innerRef}
// //                 {...provided.draggableProps}
// //                 {...provided.dragHandleProps}>
// //             <img src={ImageList.src} style={itemStyle}/>
// //             </div>
// //         );
// //     };

// //     const DroppableContainer = ({ provided, ImageList }) => {
// //         return (
// //             <div
// //                 ref={provided.innerRef}
// //                 {...provided.droppableProps}>
// //                 {ImageList?.map((ImageList, index) => (
// //                     <DraggableItem
// //                         key={ImageList.id}
// //                         provided={provided}
// //                         ImageList={ImageList}
// //                         index={index}
// //                     />
// //                 ))}
// //                 {provided.placeholder}
// //             </div>
// //         );
// //     };

// //     return (
// //         <div style={containerStyle}>

// //             <DragDropContext onDragEnd={onDragEnd}>
// //                 <Droppable
// //                     droppableId='ImageList'
// //                     type='TODO'>
// //                     {(provided) => (
// //                         <DroppableContainer
// //                             provided={provided}
// //                             ImageList={state.ImageList}
// //                         />
// //                     )}
// //                 </Droppable>
// //             </DragDropContext>
// //             </div>

// //     );
// // };

