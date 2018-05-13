import React, {Component} from "react";

class TopBar extends React.Component{
    render(){
        return(
            <div className="container" id="topBar">
                <div className="navbar navbar-inverse">
                    <ul className="nav navbar-nav pull-right">
                        <li className="frmLogin">
                            <form onsubmit="return KiemTraDangNhap()" method="post" action="index.php?a=10">
                                <input type="text" className="form-control" placeholder="Tên đăng nhập" name="username" id="txtUsername"></input>
                                <input type="password" className="form-control" placeholder="Mật khẩu" name="password" id="txtPassword"></input>
                                <button type="submit" className="btn">Đăng nhập</button>
                            </form>
                         </li>
                        <li><a href="index.php?a=8" className="p0"><button class="btn">Đăng ký</button></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default TopBar;