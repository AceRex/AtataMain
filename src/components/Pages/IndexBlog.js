import React, { Component } from "react";
import "./indexBlog.css";
import Blog1 from "../Pages/categoryImages/blog1.png";
import Blog2 from "../Pages/categoryImages/blog2.png";
import Blog3 from "../Pages/categoryImages/blog3.png";

export default class IndexBlog extends Component {
  render() {
    return (
      <div className="blog-body">
        <div className="blog">
          <div className="row">
            <div className="Imagecontainer">
              <img src={Blog1} />
            </div>
            <div className="blogtext">
              <p className="title mt-3">Cycling Wonder</p>
              <div className="content">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </div>
              <div className="Blogdetails ">
                <span className="post-by">
                  <i class="fas fa-pen-square"></i>Mc Don
                </span>
                <span className="comments">
                  <i class="far fa-comment-dots"></i>20 comments
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="row">
            <div className="Imagecontainer">
              <img src={Blog2} />
            </div>
            <div className="blogtext">
              <p className="title mt-3">What should You Eat?</p>
              <div className="content">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </div>
              <div className="Blogdetails d-flex">
                <span className="post-by">
                  <i class="fas fa-pen-square"></i>OshoBee
                </span>
                <span className="comments">
                  <i class="far fa-comment-dots"></i>0 comments
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="row">
            <div className="Imagecontainer">
              <img src={Blog3} />
            </div>
            <div className="blogtext">
              <p className="title mt-3">Tech Space</p>
              <div className="content">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </div>
              <div className="Blogdetails d-flex">
                <span className="post-by">
                  <i class="fas fa-pen-square"></i>Hennie
                </span>
                <span className="comments">
                  <i class="far fa-comment-dots"></i>10 comments
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="row">
            <div className="Imagecontainer">
              <img src={Blog3} />
            </div>
            <div className="blogtext">
              <p className="title mt-3">Tech Space</p>
              <div className="content">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </div>
              <div className="Blogdetails d-flex">
                <span className="post-by">
                  <i class="fas fa-pen-square"></i>Hennie
                </span>
                <span className="comments">
                  <i class="far fa-comment-dots"></i>10 comments
                </span>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}
