import React, { Component } from 'react'

export default class News extends Component {

    render() {
        let { title, description, image, readmore, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card mh-25 bg-dark bg-gradient w-100 p-3" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-info">{title}
                            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex: '1'}}>{source}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </h5>
                        <p className="card-text text-light">{description}</p>
                        <a href={readmore} className="btn btn-sm btn-success">Read More</a>
                        <p class="card-text"><small class="text-danger">{author ? `By ${author}` : ""}
                            {date ? `On ${new Date(date).toGMTString()}` : ""}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}
