import React, { Component } from 'react';



class CourseList extends Component {
    render() {
        return(
            <div>
               <li>
                   {this.props.details.name}
               </li>
            </div>
        );
    }
}


export default CourseList;
