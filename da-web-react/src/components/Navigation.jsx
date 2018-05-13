import React, {Component} from "react";
class Navigation extends React.Component{
    render()
    {
        return(
            <div className="container" id="navigation">
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="index.php">TRANG CHỦ</a></li>
                    </ul>
                    <form action="index.php" method="get" className="navbar-form navbar-right" id="searchBox">
                        <input type="hidden" name="a" value="5"></input>
                        <div className="input-group">
                            <input type="search" name="TenSach" id="TuKhoa" placeholder="Tên sách" class="form-control"></input>
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-default" onclick="TimKiemNangCao();">Tuỳ chọn</button>
                            </span>
                        </div>
                        <button type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>
                        <div id="advSearch">
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}
export default Navigation;