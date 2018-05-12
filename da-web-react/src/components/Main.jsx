import React, { Component } from 'react';
import Card from "./Card.jsx";
import ListGroup from "./ListGroup.jsx";

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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  	}

	render() {

		const cards = this.state.items.map((sach, index) => {
			const ten = sach.TenSanPham;
			const url = sach.HinhURL;
			const ma = sach.MaSanPham;
			const tacGia = sach.TenTacGia;
			const gia = sach.GiaSanPham;

			return (
				<Card tenSach={ten} tenTacGia={tacGia} giaBan={gia} maSach={ma} hinhAnh={"../src/images/"+url}/>
			);
		});

		return(
			<body>
			<div className="container" id="topBar">
				<div className="navbar navbar-inverse">
					<ul className="nav navbar-nav pull-right">
						<li className="frmLogin">
							<form onsubmit="return KiemTraDangNhap()" method="post" action="index.php?a=10">
								<input className="form-control" placeholder="Tên đăng nhập" name="username" id="txtUsername" type="text"/>
								<input className="form-control" placeholder="Mật khẩu" name="password" id="txtPassword" type="password"/>
								<button type="submit" className="btn">Đăng nhập</button>
							</form>
						</li>
						<li>
							<a href="index.php?a=8" className="p0"><button className="btn">Đăng ký</button></a>
						</li>			
					</ul>
				</div>
			</div>

			<div className="container" id="navigation">
				<div className="navbar navbar-inverse">

					<ul className="nav navbar-nav">
						<li className="active"><a href="index.php">TRANG CHỦ</a></li>
					</ul>

					<form action="index.php" method="get" className="navbar-form navbar-right" id="searchBox">
						<input name="a" value="5" type="hidden"/>
						<div className="input-group">
							<input name="TenSach" id="TuKhoa" placeholder="Tên sách" className="form-control" type="search"/>
							<span className="input-group-btn">
								<button type="button" className="btn btn-default" onclick="TimKiemNangCao();">Tuỳ chọn</button>
							</span>
						</div>
						<button type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>

						<div id="advSearch">

							<ul className="list-group">
								<li className="list-group-item">Giá từ:
								<select className="form-control" name="GiaTu">
								<option value="15000">15000</option>
								<option value="40000">40000</option>
								<option value="65000">65000</option>
								<option value="90000">90000</option>
								<option value="115000">115000</option>
								<option value="140000">140000</option>
								<option value="165000">165000</option>
								<option value="190000">190000</option>
								</select>			
								</li>
								<li className="list-group-item">Đến:
									<select className="form-control" name="GiaDen">
										<option value="200000">200000</option>
										<option value="175000">175000</option>
										<option value="150000">150000</option>
										<option value="125000">125000</option>
										<option value="100000">100000</option>
										<option value="75000">75000</option>
										<option value="50000">50000</option>
										<option value="25000">25000</option>
									</select>			
								</li>
								<li className="list-group-item">Thể loại:
									<select className="form-control" name="TheLoai">
										<option value="" className="hidden">-- Chọn thể loại --</option>
										<option value="1">Truyện tranh</option>
										<option value="2">Truyện ngắn</option>
										<option value="3">Tản văn</option>
										<option value="4">Tiểu thuyết</option>
										<option value="5">Khác</option>
										<option value="6">Thần thoại</option>
										<option value="10">Trinh Thám</option>
									</select>				
								</li>
								<li className="list-group-item">Nhà xuất bản:
									<select className="form-control" name="NXB">
										<option value="" className="hidden">-- Chọn nhà xuất bản --</option>
										<option value="1">Nhà Xuất Bản Lao Động - Xã Hội</option>
										<option value="2">Nhà Xuất Bản Thế Giới</option>
										<option value="3">Nhà Xuất Bản Hội Nhà Văn</option>
										<option value="4">Nhà Xuất Bản Văn Hóa Văn Nghệ</option>
										<option value="5">Nhà Xuất Bản Thanh Niên</option>
										<option value="6">Nhà Xuất Bản Lao Động</option>
										<option value="9">Nhà Xuất Bản Kim Đồng</option>
									</select>
								</li>
								<li className="list-group-item">
									Tác giả: <input className="form-control" name="TacGia" type="text"/>
								</li>
							</ul>			
						</div>
					</form>
				</div>
			</div>



			<div className="row" id="page">
				<div className="w25p pull-left">
					<div className="panel panel-default" id="cateMdl">
					<div className="panel-heading">CÁC THỂ LOẠI</div>
						<ul className="list-group">
							<li>
								<a className="list-group-item" href="index.php?a=3&amp;id=1">Truyện tranh</a>
							</li>
							<li>
								<a className="list-group-item" href="index.php?a=3&amp;id=2">Truyện ngắn</a>
							</li>
							<li>
								<a className="list-group-item" href="index.php?a=3&amp;id=3">Tản văn</a>
							</li>
							<li>
								<a className="list-group-item" href="index.php?a=3&amp;id=4">Tiểu thuyết</a>
							</li>
							<li>
								<a className="list-group-item" href="index.php?a=3&amp;id=5">Khác</a>
							</li>
							<li>
								<a className="list-group-item" href="index.php?a=3&amp;id=6">Thần thoại</a>
							</li>
							<li>
								<a className="list-group-item" href="index.php?a=3&amp;id=10">Trinh Thám</a>
							</li>
						</ul>
					</div><div className="panel panel-default" id="cateMdl">
					<div className="panel-heading">NHÀ XUẤT BẢN</div>
					{/*<ul className="list-group">
						<li><a className="list-group-item" href="index.php?a=2&amp;id=1">Nhà Xuất Bản Lao Động - Xã Hội</a></li>
						<li><a className="list-group-item" href="index.php?a=2&amp;id=2">Nhà Xuất Bản Thế Giới</a></li>
						<li><a className="list-group-item" href="index.php?a=2&amp;id=3">Nhà Xuất Bản Hội Nhà Văn</a></li>
						<li><a className="list-group-item" href="index.php?a=2&amp;id=4">Nhà Xuất Bản Văn Hóa Văn Nghệ</a></li>
						<li><a className="list-group-item" href="index.php?a=2&amp;id=5">Nhà Xuất Bản Thanh Niên</a></li>
						<li><a className="list-group-item" href="index.php?a=2&amp;id=6">Nhà Xuất Bản Lao Động</a></li>
						
					</ul>*/}
					<ListGroup/>
					</div>        
				</div>
				<div className="w72p pull-right">
					<div className="clearfix">
						<h2 className="page-header">Danh sách theo loại</h2>

						
						{cards}


					</div>         
				</div>
			</div> 

			<div className="container">
				<div className="well text-center black">
					<p>Designed By CKUS</p>
					<p>2015 - 2018</p>
				</div>
			</div>
			<div id="qdExt_cover" style={{display: "none"}}/>
			<div id="qdExt_quickButton" style={{display: "none"}}/>
			</body>
		);
		
	}
}

export default Main;


		// {/*<script>
		// 	function TimKiemNangCao()
		// 	{
		// 	    $("#advSearch").toggle('fast');
		// 	}
		// </script><div className="container">*/}
		
		// { <script type="text/javascript">
		// 	            var title = "Danh sách sản phẩm";
		// 	            if (document.title != title) {
		// 	                document.title = title;
		// 	            }
		// 	        </script>}