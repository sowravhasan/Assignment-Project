import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          DevOps Engineer <span>2019-present</span>
                        </h2>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Consequuntur suscipit dicta debitis, impedit
                          placeat voluptas distinctio, sunt atque natus alias,
                          tempore modi repellendus rem totam laboriosam.
                          Blanditiis, ad? Ad blanditiis unde tempore minima
                          ullam saepe illum rerum quasi voluptas ipsum?
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          George Brown College <span>2015-2019</span>
                        </h2>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Odio, quo doloribus sequi nihil sunt quam
                          accusamus libero accusantium autem. Fugit numquam
                          magni vel consequuntur expedita consectetur eligendi,
                          minus iusto blanditiis.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Primary and Higher Education <span>2003-2015</span>
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Similique voluptate exercitationem optio
                          voluptatibus praesentium est ratione nulla. Quisquam,
                          aliquid iusto beatae impedit, explicabo hic aut iste
                          veritatis voluptates, accusantium animi.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
