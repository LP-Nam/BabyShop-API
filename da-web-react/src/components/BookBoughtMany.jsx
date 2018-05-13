import React from "react";
import Card from "./Card"
class BookBoughtMany extends React.Component{
    render()
    {
        return(
            <div class="clearfix">
                <h2 class="page-header">Sách được mua nhiều</h2>
                <Card />
             </div>
        )
    }
}
export default BookBoughtMany;