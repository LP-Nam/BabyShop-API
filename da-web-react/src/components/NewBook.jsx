import React from"react";
import ListBookItem from "./ListBookItem";
class NewBook extends React.Component{
    render()
    {
        return(
            <div class="clearfix">
                <h2 class="page-header">Sách mới</h2>
                <ListBookItem />
            </div>
        )
    }
}
export default NewBook;