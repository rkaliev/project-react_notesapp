
var Note = React.createClass({
	render: function() {
		var style = {backgroundColor : this.props.color }
		return (
			<div className="note" style={style}> { this.props.children } </div>
		);
	}
});

var NoteEditor = React.createClass({
	render: function() {
		return (
			<div className="notes-editor">
				<textarea placeholder="Enter your note here..." rows={5} className="textarea" />
				<button className="add-button">Add</button>
			</div>
		);
	}
});

var NotesGrid = React.createClass({
	componentDidMount() {
		var grid = this.refs.grid;
	    var elem = document.querySelector('.grid');
		var msnry = new Masonry( grid, {
		  itemSelector: '.note',
		  columnWidth: 200,
		  gutter: 10
		});
	},
	render: function() {
		return (
			<div className="notes-grid" ref="grid">
				{
					this.props.notes.map(function(note){
						return <Note key={note.id} color={note.color}> {note.text} </Note>;
					})
				}
			</div>
		);
	}
});

var NotesApp = React.createClass({
	getInitialState() {
	    return {
	        notes:  [
					  {
					    id: 0,
					    text: "Anim ad commodo enim sunt aliquip mollit cupidatat ex ut ad culpa veniam. Consectetur labore anim ullamco in laborum officia aliquip enim aute velit aliquip commodo. Ex mollit ipsum do excepteur Lorem incididunt proident duis minim anim. Nisi cupidatat commodo elit nostrud do ullamco non aliqua aute magna. In quis adipisicing consequat deserunt do cillum adipisicing nisi ipsum anim voluptate nostrud.",
					    color: "#ffd700"
					  },
					  {
					    id: 1,
					    text: "Anim ad commodo enim sunt aliquip mollit cupidatat ex ut ad culpa veniam. Consectetur labore anim ullamco in laborum officia aliquip enim aute velit aliquip commodo. Ex mollit ipsum do excepteur Lorem incididunt proident duis minim anim. Nisi cupidatat commodo elit nostrud do ullamco non aliqua aute magna. In quis adipisicing consequat deserunt do cillum adipisicing nisi ipsum anim volupta. Adipisicing e fugiat officia cupidatat sit anim.",
					    color: "#20b2aa"
					  },
					  {
					    id: 2,
					    text: "Anim ad commodo enim sunt aliquip mollit cupidatat ex ut ad culpa veniam. Consectetur labore anim ullamco in laborum officia aliquip enilit aliquip commodo. Ex mollit ipsum do excepteur Lorem incididunt proident duis minim anim. Nisi cupidatat commodo elit nostrud do ullamco non magna. In quis adipisicing consequat deserunt do cillum adipisicing nisi ipsum anim voluptate nostrud. Adipisicing ipsum est aute fugiat officia cupidatat sit anim.",
					    color: "#87cefa"
					  },
					  {
					    id: 3,
					    text: "Anim ad commodo enim sunt aliquip mollit cupidatat ex ut ad culpa veniam. Consectetur labore anim ullamco in laborum officia aliquip enim aute velit aliquip commodo. Ex mollit ipsum do excepteur Lorem incididunt proident duis minim anim. Nisi cupidatat commodo elit nostrud do ullamco non aliqua aute magna. In quis adipisicing consequat deserunt do cillum adipisicing nisi ipsum anim voluptate nostrud. Adipisicing ipsum est aute fugiat officia cupidatat sit anim.",
					    color: "#90ee90"
					  },
					  {
					    id: 4,
					    text: "Anim ad commodo enim sunt aliquip mollit cupidatat ex ut ad culpa veniam. Consectetur labore anim ullamco in laborum officia aliquip enim aute velit aliquip commodo. Ex mollit ipsum do excepteur Lorem incididunt proident duis minim anim. Nisi cupidatat commodo elit nostrud do ullamco non aliqua aute magna. In quis adipisicing consequat deserunt do cillum adipisicing nisi ipsum anim voluptate nostrud. Adipisicing ipsum est aute fugiat officia cupidatat sit anim.",
					    color: "#ffb6c1"
					  },
					  {
					    id: 5,
					    text: "Anim ad commodo enim sunt aliquip mollit cupidatat ex ut ad culpa veniam. Consectetur labore anim ullamco in laborum officia aliquip enim aute velit aliquip commodo. Ex mollit ipsum do excepteur Lorem incididunt proident duis minim anim. Nisi cupidatat commodo elit nostrud do ullamco non aliqua aute magna. In quis adipisicing consequat deserunt do cillum adipisicing nisi ipsum anim voluptate nostrud. Adipisicing ipsum est aute fugiat officia cupidatat sit anim.",
					    color: "#5f9ea0"
					  },
					  {
					    id: 6,
					    text: "Anim ad commodo enim sunt aliquip mollit cupidatat ex ut ad culpa veniam. Consectetur labore anim ullamco in laborum officia aliquip enim aute veduis minim anim. Nisi cupidatat commodo elit nostrud do ullamco non aliqua aute magna. In quis adipisicing consequat deserunt do cillum adipisicing nisi ipsum anim voluptate nostrud. Adipisicing ipsum est aute fugiat officia cupidatat sit anim.",
					    color: "#ffb6c1"
					  },
					  {
					    id: 7,
					    text: "Anim ad commodo enim sunt aliquip mollit cupidatat ex ut ad culpa veniam. Consectetur labore anim ullamco in laborum officia aliquip enim aute velitcing consequat deserunt do cillum adipisicing nisi ipsum anim voluptate nostrud. Adipisicing ipsum est aute fugiat officia cupidatat sit anim.",
					    color: "#5f9ea0"
					  },
					  {
					    id: 8,
					    text: "Anim ad commodo enim sunt aliquip mollit cupidatat ex ut ad culpa veniam. Consectetur labore anim ullamco in laborum officia aliquip enim auteonsequat deserunt do cillum adipisicing nisi ipsum anim voluptate nostrud. Adipisicing ipsum est aute fugiat officia cupidatat sit anim.",
					    color: "#ffa07a"
					  },
					  {
					    id: 9,
					    text: "Anim ad commodo enim sunt aliquip mollit cupidatat ex ut ad culpa veniam. Consectetur labore anim ullamco in laborum officia aliquip enim aute velit aliquip commodo.elit nostrud do ullamco non aliqua aute magna. In quis adipisicing consequat deserunt do cillum adipisicing nisi ipsum anim voluptate nostrud. Adipisicing ipsum est aute fugiat officia cupidatat sit anim.",
					    color: "#5f9ea0"
					  },
					  {
					    id: 10,
					    text: "Anim ad commodo estrud do ullamco non aliqua aute magna. In quis adipisicing consequat deserunt do cillum adipisicing nisi ipsum anim voluptate nostrud. Adipisicing ipsum est aute fugiat officia cupidatat sit anim.",
					    color: "#ffb6c1"
					  }]
	    };
	},
	render: function() {
		return (
			<div className="notes-app">
			<h1>NotesApp</h1>
				NotesApp
				<NoteEditor />
				<NotesGrid  notes = {this.state.notes} />
			</div>
		);
	}
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
);