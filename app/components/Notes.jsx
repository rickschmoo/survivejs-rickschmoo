import React from 'react';
import Note from './Note.jsx';


export default class Notes extends React.Component {

  constructor(props) {
    super(props);

    this.renderNote = this.renderNote.bind(this);
  }

  render() {
    const notes = this.props.items;

    return (
      <div>
        <ul className="notes">
          {notes.map(this.renderNote)}
        </ul>
      </div>
    );
  }

  renderNote(note) {
    return (
      <li className="note" key={note.id}>
        {/* comment test */}
        <Note 
          task={note.task} 
          onEdit={this.props.onEdit.bind(null, note.id)}
          onDelete={this.props.onDelete.bind(null, note.id)} />
      </li>
    );
  }
}
