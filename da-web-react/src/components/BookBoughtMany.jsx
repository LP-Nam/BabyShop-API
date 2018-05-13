import React from "react";
import ListBookItem from "./ListBookItem";
class BookBoughtMany extends React.Component{
    render()
    {
        return(
            <div class="clearfix">
                <h2 class="page-header">Sách được mua nhiều</h2>
                <ListBookItem />
             </div>
        )
    }
}
export default BookBoughtMany;