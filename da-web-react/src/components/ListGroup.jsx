import React, {Component} from "react";
import ListGroupItem from "./ListGroupItem.jsx";

class ListGroup extends Component {

	render() {
		return(
			// <ul className="list-group">
			// 	<ListGroupItem/>
			// 	<ListGroupItem/>
			// 	<ListGroupItem/>
			// 	<ListGroupItem/>
			// 	<ListGroupItem/>
			// </ul>
			<div className="panel panel-default">
			<div className="panel-heading">NHÀ XUẤT BẢN</div>
				<ul className="list-group">
					<li><a className="list-group-item" href="<?php echo $url; ?>">asdfasdf</a></li>
				</ul>
			</div>
		);
	}

}

export default ListGroup;