import React, { Component } from "react";
// import SignUpForm from './SignUpForm';
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
// import v4 from 'uuid/v4' // библиотека для генерации ID
import NoteFilter from "./NoteFilter";

const FilterNotes = (filter, notes) => {
  return notes.filter(note => note.text.toLowerCase().includes(filter.toLowerCase()));
};

export default class App extends Component {
  state = {
    notes: [],
    filter: ""
  };

  handleAddNote = text => {
    this.setState(prevState => ({
      notes: [{ id: Date.now(), text }, ...prevState.notes]
    }));
  };

  handleDeleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };

  handleFilterChange = evt => {
    console.log(evt.target.value);

    this.setState({
      filter: evt.target.value
    });
  };

  render() {
    const { notes, filter } = this.state;

    const filteredNotes = FilterNotes(filter, notes);

    return (
      <div>
        <h1>Forms in React</h1>
        <NoteEditor onSubmit={this.handleAddNote} />
        <NoteList notes={filteredNotes} onDelete={this.handleDeleteNote} />
        <hr />
        <NoteFilter filter={filter} onFilterChange={this.handleFilterChange} />
        {/* <SignUpForm /> */}
      </div>
    );
  }
}
