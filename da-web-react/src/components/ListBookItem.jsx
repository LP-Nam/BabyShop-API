import React from "react";
import Card from "./Card.jsx";

class ListBookItem extends React.Component{
    render()
    {

        // const cards = this.props.items.map((sach, index) => {
        //     const ten = sach.TenSanPham;
        //     const url = sach.HinhURL;
        //     const ma = sach.MaSanPham;
        //     const tacGia = sach.TenTacGia;
        //     const gia = sach.GiaSanPham;

        //     return (
        //         <Card tenSach={ten} tenTacGia={tacGia} giaBan={gia} maSach={ma} hinhAnh={"../src/images/"+url}/>
        //     );
        // });

        return(
            <div class='w12e pull-left' title ="<?php echo $temp;  ?>">
                <div class="thumbnail productThumb">
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + '/images/Product/1.jpg'} alt="image" />
                    <h4>asdfasdfasdf</h4>
                    <h4 class="small">asdfasdfasdf</h4>
                    <h4 class="price"> VNĐ</h4>
                    </a>
                </div>
            </div>
        )
    }

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         tenSach: "",
    //         tenTacGia: "",
    //         giaBan: 0,
    //         thongTin: "",
    //         hinhAnh: ""
    //     }
    // }

    // render() {
    //     return(
    //         <div className="w12e pull-left" title={this.props.thongTin}>
    //             <div className="thumbnail productThumb">
    //                 <a href="">
    //                     <img src={this.props.hinhAnh} alt=""/>
    //                     <h4>{this.props.tenSach}</h4>
    //                     <h4 className="small">{this.props.tenTacGia}</h4>
    //                     <h4 className="price">{this.props.giaBan},000 VNĐ</h4>
    //                 </a>
    //             </div>
    //         </div>
    //     );
    // }
}
export default ListBookItem;