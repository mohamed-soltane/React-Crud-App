import React, { Component } from 'react';

class CourseList extends Component {
    state = {
        isEdit : false
    }

    //Render Course Item
    renderCourse = () => {
        return (
            <li>
                <span>{this.props.details.name}</span> 
                <button onClick={()=> {this.toggleState()}}>EditCourse</button>
                <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            </li>
        )
    }
    //Toggle State
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }
    //Update Course Item
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index ,this.input.value);
        this.toggleState();

    }
    //render Update Form
    renderUpdateForm = () => {
return(
    <form onSubmit={this.updateCourseItem}>
        <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
        <button>Update Course</button>
    </form>

)
    }
    render() {
        let {isEdit} = this.state;
        return(
            <div>
             { isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </div>
        );
    }
}


export default CourseList;
