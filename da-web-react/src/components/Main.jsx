import React, { Component } from 'react';
import Card from "./Card.jsx";
import ListGroup from "./ListGroup.jsx";
import TopBar from "./TopBar"
import Navigation from"./Navigation";
import ListType from "./ListType";
import Footer from "./Footer";
import Content from "./Content";
class Main extends Component {

	constructor(props) {
		super(props);

		this.render = this.render.bind(this);

		this.state = {
			items: [{}]
		}
	}

	componentDidMount() {
    fetch("http://localhost:3001/api/product/new")
      .then(res => res.json())
      .then(
        (result) => {
        	console.log(result);
          this.setState({
            items: result
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      )
  	}

	render() {
		return(
			<div>
				<TopBar />
				<Navigation/>
				<div className="container">
					<div className="row" id="page">
						<div className="w25p pull-left">
							<ListGroup />
							<ListType />
						</div>
						<div className="w72p pull-right">
							<Content />
						</div>
					</div> 
				</div>
				<Footer />
			</div>
		)
	}
}
export default Main;
