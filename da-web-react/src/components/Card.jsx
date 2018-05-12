import React, { Component } from "react";

class Card extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tenSach: "",
			tenTacGia: "",
			giaBan: 0,
			thongTin: "",
			hinhAnh: ""
		}
	}

	render() {
		return(
			<div className="w12e pull-left" title={this.props.thongTin}>
				<div className="thumbnail productThumb">
					<a href="">
						<img src={this.props.hinhAnh} alt=""/>
						<h4>{this.props.tenSach}</h4>
						<h4 className="small">{this.props.tenTacGia}</h4>
						<h4 className="price">{this.props.giaBan},000 VNĐ</h4>
					</a>
				</div>
			</div>
		);
	}

}

export default Card;