import React, { useState, useEffect } from 'react';
import questions from '../data/questions';

const items = questions[6].item
const goodItems = questions[6].goodItem

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: []
}

const QuestionImgDrag =()=> {
  const [list, setList] = useState(items);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
  const [checkResponse, setCheckResponse] = useState( "Et la reponse est:")
  
  // onDragStart fires when an element
  // starts being dragged
  const onDragStart = (event) => {
   const initialPosition = Number(event.currentTarget.dataset.position);
   
   setDragAndDrop({
    ...dragAndDrop,
    draggedFrom: initialPosition,
    isDragging: true,
    originalOrder: list
   });
   
   
   // Note: this is only for Firefox.
   // Without it, the DnD won't work.
   // But we are not using it.
   event.dataTransfer.setData("text/html", '');
  }
  
  // onDragOver fires when an element being dragged
  // enters a droppable area.
  // In this case, any of the items on the list
  const onDragOver = (event) => {
   
   // in order for the onDrop
   // event to fire, we have
   // to cancel out this one
   event.preventDefault();
   
   let newList = dragAndDrop.originalOrder;
  
   // index of the item being dragged
   const draggedFrom = dragAndDrop.draggedFrom; 
 
   // index of the droppable area being hovered
   const draggedTo = Number(event.currentTarget.dataset.position); 
 
   const itemDragged = newList[draggedFrom];
   const remainingItems = newList.filter((item, index) => index !== draggedFrom);
 
    newList = [
     ...remainingItems.slice(0, draggedTo),
     itemDragged,
     ...remainingItems.slice(draggedTo)
    ];
     
   if (draggedTo !== dragAndDrop.draggedTo){
    setDragAndDrop({
     ...dragAndDrop,
     updatedOrder: newList,
     draggedTo: draggedTo
    })
   } 
  }
  
  const onDrop = (event) => {    
  setList(dragAndDrop.updatedOrder);    
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false
    });
  }
 
 
  /*onDragLeave = () => {
    setDragAndDrop({
    ...dragAndDrop,
    draggedTo: null
   });
   
  }*/
  //verification of result
  /*const checkResult =()=> {
    if ( JSON.stringify(goodItems) === JSON.stringify(list)){
      setCheckResponse("Bonne reponse!")
    } else{
      setCheckResponse("T null")
    }
  }*/

  // Not needed, just for logging purposes:
  useEffect( ()=>{
   console.log("Dragged From: ", dragAndDrop && dragAndDrop.draggedFrom);
   console.log("Dropping Into: ", dragAndDrop && dragAndDrop.draggedTo);
  }, [dragAndDrop])
  
  useEffect( ()=>{
   console.log("List updated!");
  }, [list])
  
   return(
     <section className="">
       <h2>{questions[6].title}</h2>
      <p> {checkResponse} </p>
      <div className="block">
        <div className="blockLeft"> 
          <ul className="">        
            {list.map( (item, index) => {
              return(
                <li
                  key={index}
                  
                  data-position={index}
                  draggable
                  
                  onDragStart={onDragStart}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  
                  //onDragLeave={onDragLeave}
                  
                  className={dragAndDrop && dragAndDrop.draggedTo=== Number(index) ? "dropArea" : ""}
                  >
                  <img className="" src= {item.logo} />
                  <i class="fas fa-arrows-alt-v"></i>
                </li>
              )
            })}        
          </ul>
        </div>
        <div className="blockRight">
          <ul>
          {goodItems.map( (goodItem, index) => {
              return(
                <li>  
                  <p className=""> {goodItem.name} </p>
                  <i class="fas fa-arrows-alt-v"></i>
                </li>
              )
            })}
          </ul>
          <p onDragOver={onDragOver} onDrop={onDrop}></p>
          <p onDrop={onDrop}></p>
          <p onDrop={onDrop}></p>
          <p onDrop={onDrop}></p>
        </div>
      </div>
      {/*<button type="button" onClick={ ()=>checkResult() }>ok</button>*/}
     </section>
     )
};


export default QuestionImgDrag;
