import React from 'react'

const Cards = (props) => {
    let { title, description, image, readmore, author, date, source } = props;

    return (
        <div className='my-3'>
            <div className="card mh-25 bg-dark bg-gradient w-100 p-3" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-info">{title}
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </h5>
                    <p className="card-text text-light">{description}</p>
                    <a href={readmore} className="btn btn-sm btn-success">Read More</a>
                    <p className="card-text"><small className="text-danger">{author ? `By ${author}` : ""}
                        {date ? `On ${new Date(date).toGMTString()}` : ""}</small></p>
                </div>
            </div>
        </div>
    )

}
export default Cards;

