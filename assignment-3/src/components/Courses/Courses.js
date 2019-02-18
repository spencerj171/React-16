import React, { Component } from "react";
import Course from "./Course/Course";
import { Link, Route } from "react-router-dom";

class Courses extends Component {
  state = {
    courses: [
      {title: "Sample Course", description: "This is some text describing the course.", id: 0},
      {title: "Sample Course", description: "This is some text describing the course.", id: 1},
      {title: "Sample Course", description: "This is some text describing the course.", id: 2},
      {title: "Sample Course", description: "This is some text describing the course.", id: 3}
    ],
    clickedCourse: null
  }

  clickedCourseHandler = (id, title, description) => {
    const style = {
      "width": "85%",
      "height": "400px",
      "boxShadow" : "2px 3px #404040"
    }

    this.setState({
      clickedCourse: (
        <Course
          id={id}
          title={title + " " + id}
          description={description}
          style={style}
        />
      )
    });
  }

  render() {
    const courses = this.state.courses.map((course) => (
      <Link key={course.id} to={"/courses/" + course.id}>
        <Course
          id={course.id}
          title={course.title}
          description={course.description}
          clicked={() => this.clickedCourseHandler(course.id, course.title, course.description)} />
      </Link>
    ));

    return (
      <React.Fragment>
        {courses}
        <Route path="/courses/:id" component={() => this.state.clickedCourse} />
      </React.Fragment>
    );
  }
}

export default Courses;
