import React, { Component } from 'react'

export default class News extends Component {
    
    render() {
        let { title, description, image, readmore} = this.props;
        return (
            <div className='my-3'>
                <div className="card mh-25 bg-dark bg-gradient w-100 p-3" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-info">{title}</h5>
                        <p className="card-text text-light">{description}</p>
                        <a href={readmore} className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
