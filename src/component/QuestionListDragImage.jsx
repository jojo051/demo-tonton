import React, { useState, useEffect } from 'react';
import questions from '../data/questions';

const items = questions[7].items;
const goodItems = questions[7].goodItems;

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};
//debut du composant
const QuetionListDragImage = () => {
  const [list, setList] = useState(items);
  const [goodList, setGoodList] = useState(goodItems);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
  const [result, setResult] = useState(false);

  let checkResult = () => {
    if (JSON.stringify(list) === JSON.stringify(goodList)) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });

    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    // But we are not using it.
    event.dataTransfer.setData('text/html', '');
  };

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
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = (event) => {
    setList(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  useEffect(() => {
    console.log('Dragged From: ', dragAndDrop && dragAndDrop.draggedFrom);
    console.log('Dropping Into: ', dragAndDrop && dragAndDrop.draggedTo);
  }, [dragAndDrop]);

  useEffect(() => {
    console.log('List updated!');
  }, [list]);

  return (
    <section>
      <h2>{questions[7].title}</h2>
      <ul style={{ display: 'flex' }}>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              data-position={index}
              draggable
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              //onDragLeave={onDragLeave}

              className={
                dragAndDrop && dragAndDrop.draggedTo === Number(index)
                  ? 'dropArea'
                  : ''
              }
            >
              <p>
                {item.id} .{' '}
                <img src={item.img} style={{ width: '50%', height: '50%' }} />
              </p>
            </li>
          );
        })}
      </ul>
      <button onClick={checkResult}>Check Result</button>
    </section>
  );
};

export default QuetionListDragImage;
