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
			newItems: [{}],
			mostPopularItems: [{}]
		}
	}

	componentDidMount() {
    fetch("http://localhost:3001/api/product/new")
      .then(res => res.json())
      .then(
        (result) => {
        	console.log(result);
          this.setState({
            newItems: result
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      );
      fetch("http://localhost:3001/api/product/best-seller")
      .then(res => res.json())
      .then(
        (result) => {
        	console.log(result);
          this.setState({
            mostPopularItems: result
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      );
  	}

	render() {

		// const cards = this.state.newItems.map((sach, index) => {
		// 	const ten = sach.TenSanPham;
		// 	const url = sach.HinhURL;
		// 	const ma = sach.MaSanPham;
		// 	const tacGia = sach.TenTacGia;
		// 	const gia = sach.GiaSanPham;

		// 	return (
		// 		<Card tenSach={ten} tenTacGia={tacGia} giaBan={gia} maSach={ma} hinhAnh={"../src/images/"+url}/>
		// 	);
		// });

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
							<Content newItems={this.state.newItems} mostPopularItems={this.state.mostPopularItems} />
						</div>
					</div> 
				</div>
				<Footer />
			</div>
		)
	}
}
export default Main;
