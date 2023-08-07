import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'


const NewsItems = (props) => {
    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalRes, setTotalRes] = useState(0);

    

    const upadateNews = async () => {
        props.setProgress(30);

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=12`

        setLoading(true);
        let data = await fetch(url);
        let finalData = await data.json();
        setLoading(false);
        setArr(finalData.articles);
        setTotalRes(finalData.totalResults)
        setLoading(false);

        props.setProgress(100);
    }

    useEffect(() => {
        upadateNews();
    },[])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=12`

        setPage(page+1);
        setLoading(true);
        let data = await fetch(url);
        let finalData = await data.json();
        setLoading(false);
        setArr(arr.concat(finalData.articles));
        setTotalRes(finalData.totalResults)
    };

    



    return (
        <>
            <InfiniteScroll
                dataLength={arr.length}
                next={fetchMoreData}
                hasMore={arr.length !== totalRes}
                loader={<Spinner />}
            >
                <div className='container my-3'>

                    <div className="row">
                        {
                            arr.map((ele, idx) => {
                                return (
                                    <div key={idx} className="col-md-3"><Cards title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description ? ele.description.slice(0, 88) : ""} image={ele.urlToImage ? ele.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAcCQTp6jMR-GP6N8-lpccALnMtVyeX6LqA&usqp=CAU"} readmore={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} /></div>
                                )
                            })
                        }
                    </div>

                </div>
            </InfiniteScroll>
        </>
    )

}
NewsItems.defaultProps = {
    country: 'in',
    category: 'general'
}
NewsItems.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}
export default NewsItems;
