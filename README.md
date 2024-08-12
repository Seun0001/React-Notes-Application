# React Notes Application

## Project Overview

The React Notes Application is a dynamic note-taking app built with React. It allows users to create, save, search, categorize, and delete notes. The app features a user-friendly interface with a search bar for finding notes, folders for organizing them, and an editor for adding new notes.

## Components

### `App.js`

The main component of the application that ties everything together. It manages the state for notes, search terms, folders, and the selected folder. It renders the following child components:

- **`SearchBar`**: Handles search functionality and displays the search bar.
- **`FolderList`**: Displays folders for organizing notes.
- **`NoteEditor`**: Provides an interface for adding new notes.
- **`NoteList`**: Lists the notes based on the search term and selected folder.

### `SearchBar.js`

A component that contains:

- **Input field**: For entering search terms.
- **Search button**: To trigger the search.
- **Dynamic Suggestions**: Shows a list of notes or projects matching the search term immediately as the user types.

### `NoteEditor.js`

A component for creating and saving new notes. Includes:

- **Title input**: For entering the note title.
- **Content textarea**: For writing the note content.
- **Save button**: To add the note to the list.

### `NoteList.js`

Displays a list of notes. Each note includes:

- **Title**: Displayed prominently.
- **Content**: The body of the note.
- **Delete button**: To remove the note from the list.

### `FolderList.js`

Allows users to select a folder to view notes. It highlights the selected folder and displays other available folders.

## Styling (`styles.css`)

The `styles.css` file provides the following styles:

### General App Container

- **`.app-container`**: Centers content, sets background color, and applies padding.

### Note Editor

- **`.note-editor`**: Styles the note editor with a column layout and margins. Inputs and buttons are styled for ease of use.

### Note List and Note Items

- **`.note-list`**: Arranges notes using a flexible layout.
- **`.note`**: Styles individual notes with background color, border radius, padding, and box shadow. Positions the delete button.

### Search Bar

- **`.search-bar`**: Defines layout, spacing, and styling for the search bar and button.
- **`.search-bar input`**: Styles the input field with padding, font size, and border radius.
- **`.search-bar button`**: Styles the search button with background color, border, and hover effects.

### Folder List

- **`.folder-list`**: Arranges folders with padding and border styling.
- **`.folder-item`**: Styles each folder item with cursor pointer and transition effects for selection.

## Functionality

- **Dynamic Search**: As users type in the search bar, suggestions are updated in real-time based on the search term.
- **Folder Organization**: Notes can be categorized and viewed by folder.
- **Note Management**: Users can create, edit, and delete notes. Notes are filtered based on the search term and selected folder.

## Conclusion

The React Notes Application provides a comprehensive solution for managing notes with a focus on dynamic search capabilities and folder-based organization. The use of React and CSS ensures a responsive and interactive user experience.
