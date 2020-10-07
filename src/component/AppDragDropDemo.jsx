import React, { Component } from 'react';

export default class AppDragDropDemo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { name: 'Angular', category: 'wip', bgcolor: 'yellow' },
        { name: 'Vue', category: 'wip', bgcolor: 'skyblue' },
        { name: 'React', category: 'wip', bgcolor: 'pink' },
        { name: 'JS', category: 'wip', bgcolor: 'gray' },
        { name: 'C++', category: 'wip', bgcolor: 'white' },
        { name: 'Pyton', category: 'wip', bgcolor: 'red' },
      ],
    };
  }

  onDragStart = (ev, id) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData('id', id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    const id = ev.dataTransfer.getData('id');

    const tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks,
    });
  }

  render() {
    const tasks = {
      wip: [],
      complete: [],
      complete2: [],
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>,
      );
    });

    return (
      <div className="container-drag">
        <h2 className="header">DRAG & DROP DEMO</h2>
        <div
          className="wip"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => { this.onDrop(e, 'wip'); }}
        >
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div
          className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, 'complete')}
        >
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
        <div
          className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, 'complete2')}
        >
          <span className="task-header">COMPLETED2</span>
          {tasks.complete2}
        </div>
        {(this.state.tasks[0].name === 'Angular' && this.state.tasks[0].category === 'complete2')
                && (this.state.tasks[2].name === 'React' && this.state.tasks[2].category === 'complete')
          ? <p> Bien jouer </p> : <p> c pas ca </p> }
      </div>
    );
  }
}
