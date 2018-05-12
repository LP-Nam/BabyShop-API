import React, {Component} from "react";
import ListGroupItem from "./ListGroupItem.jsx";

class ListGroup extends Component {

	render() {
		return(
			<ul className="list-group">
				<ListGroupItem/>
				<ListGroupItem/>
				<ListGroupItem/>
				<ListGroupItem/>
				<ListGroupItem/>
			</ul>
		);
	}

}

export default ListGroup;