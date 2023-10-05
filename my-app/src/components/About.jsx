import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              veritatis eum nihil maxime consequatur doloremque nisi quas
              architecto facere, natus a ab explicabo asperiores aliquam
              obcaecati porro facilis. In cumque accusamus ipsa praesentium
              deleniti enim repellat ad ab, vitae modi itaque nostrum fuga,
              eaque aperiam voluptate, voluptates voluptas? Autem dolorum
              aliquid, eligendi quo eius, animi rerum numquam enim illo ullam
              assumenda amet neque harum mollitia unde dolor corporis, id quod
              eveniet? Nostrum obcaecati nobis officiis. Alias reprehenderit,
              beatae laudantium vitae saepe nobis id dolore sit? Eveniet placeat
              sed non rem exercitationem, facere enim veniam eligendi ex,
              veritatis, reprehenderit necessitatibus soluta?
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://media.istockphoto.com/id/1250005831/vector/company-employees-planning-task-and-brainstorming.jpg?s=612x612&w=0&k=20&c=6U5s4fa8e4wMYSJyhEFyosUnYxEI8ehJ_sf4JFkpmE8="
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About