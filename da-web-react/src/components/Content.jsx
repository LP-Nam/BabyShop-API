import React, {Component} from "react";
import NewBook from "./NewBook";
import BookBoughtMany from "./BookBoughtMany";
class Content extends React.Component{
    render()
    {
        return(
            <div>                        
                <NewBook />
                <BookBoughtMany />  
            </div>
        )
    }
}
export default Content;