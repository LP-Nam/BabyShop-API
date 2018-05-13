import React, {Component} from "react";
class ListType extends React.Component{
    render()
    {
        return(
            <div className="panel panel-default" id="cateMdl">
                <div className="panel-heading">CÁC THỂ LOẠI</div>
                <ul className="list-group">
                    <li>
                        <a className="list-group-item" href="<?php echo $url; ?>">aasdfjasdf</a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default ListType;