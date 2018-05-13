import React from "react";
import Card from "./Card";
class MostPopularBooks extends React.Component{
    render()
    {

    	const cards = this.props.items.map((sach, index) => {
			const ten = sach.TenSanPham;
			const url = sach.HinhURL;
			const ma = sach.MaSanPham;
			const tacGia = sach.TenTacGia;
			const gia = sach.GiaSanPham;

			return (
				<Card tenSach={ten} tenTacGia={tacGia} giaBan={gia} maSach={ma} hinhAnh={process.env.PUBLIC_URL + "/images/Product/"+url}/>
			);
		});

        return(
            <div class="clearfix">
                <h2 class="page-header">Sách được mua nhiều</h2>
                {cards}
             </div>
        )
    }
}
export default MostPopularBooks;