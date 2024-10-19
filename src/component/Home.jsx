import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_COURES_PROGRESS } from "../redux-saga/Producet/Action/Action";

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCourse, setSelectedCourse] = useState(null); // State to store the selected course
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  useEffect(() => {
    dispatch({ type: GET_COURES_PROGRESS });
  }, [dispatch]);

  const data = useSelector((state) => state.getCouresReducer.coueres);
  console.log(data);

  // Function to handle 'View More Details' click
  const handleViewMore = (course) => {
    setSelectedCourse(course);
    const modal = new window.bootstrap.Modal(
      document.getElementById("courseModal")
    );
    modal.show();
  };

  // Filter the courses based on the search query
  const filteredCourses = data.filter((course) =>
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* ====== Start Header ====== */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Developers
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            {/* Search by Category */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Category"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              />
              <button className="btn btn-outline-success" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* ====== Start Course Cards ====== */}
      <div className="container">
        <div className="row mb-5">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((e, index) => {
              return (
                <div key={index} className="col-3 mt-4">
                  <div className="card h-100">
                    <img
                      src={e.course_img}
                      className="card-img-top card_img"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="card-title text-sm">{e.course_time}</p>
                        <p className="card-title text-sm">{e.category}</p>
                      </div>
                      <h6 className="card-title">
                        Course Name :- {e.course_name}
                      </h6>
                      <p className="card-title">
                        Faculty Name :- {e.faculty_name}
                      </p>
                      <p className="card-title">
                        Course Details :- {e.descriptions}
                      </p>
                      <h6 className="card-text">
                        Course Price :- {e.course_price}
                      </h6>
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleViewMore(e)}
                    >
                      View More Details
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12">
              <p className="text-center">No courses found for the selected category.</p>
            </div>
          )}
        </div>
      </div>

      {/* ====== Start Modal ====== */}
      <div
        className="modal fade"
        id="courseModal"
        tabIndex="-1"
        aria-labelledby="courseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="courseModalLabel">
                {selectedCourse?.course_name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                src={selectedCourse?.video_url}
                height="300"
                className="w-100"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p>
                <strong>Category: </strong>
                {selectedCourse?.category}
              </p>
              <p>
                <strong>Faculty Name: </strong>
                {selectedCourse?.faculty_name}
              </p>
              <p>
                <strong>Course Time: </strong>
                {selectedCourse?.course_time}
              </p>
              <p>
                <strong>Description: </strong>
                {selectedCourse?.descriptions}
              </p>
              <p>
                <strong>Price: </strong>
                {selectedCourse?.course_price}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
