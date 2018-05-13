import React from "react";
class ListBookItem extends React.Component{
    render()
    {
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
}
export default ListBookItem;