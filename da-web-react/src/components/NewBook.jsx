import React from"react";
import Card from "./Card"
class NewBook extends React.Component{
    render()
    {
        return(
            <div class="clearfix">
                <h2 class="page-header">Sách mới</h2>
                <Card />
            </div>
        )
    }
}
export default NewBook;