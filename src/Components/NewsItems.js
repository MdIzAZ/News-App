import React, { Component } from 'react'
import Cards from './Cards'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class NewsItems extends Component {
    static defaultProps={
        country: 'in',
        category: 'general'
    }
    static propTypes={
        country: PropTypes.string,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            arr: [],
            loading: false,
            page: 2,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d6e4c8b65ff41af8835fb88010e5f8f&page=${this.state.page-1}&pageSize=12`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let finalData = await data.json();
        this.setState({ 
            loading: false,
            arr: finalData.articles,
            total: finalData.totalResults
        });
    }

    handlePre = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d6e4c8b65ff41af8835fb88010e5f8f&page=${this.state.page-1}&pageSize=12`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let finalData = await data.json();
        this.setState({
            loading: false,
            arr: finalData.articles,
            page: this.state.page - 1
        });
    }

    handleNxt = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4d6e4c8b65ff41af8835fb88010e5f8f&page=${this.state.page-1}&pageSize=12`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let finalData = await data.json();
            this.setState({
                loading: false,
                arr: finalData.articles,
                page: this.state.page + 1
            });
    }


    render() {
        return (
            <div className='container my-3'>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {
                        !this.state.loading && this.state.arr.map((ele, idx) => {
                            return (
                                <div key={idx} className="col-md-3"><Cards title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description ? ele.description.slice(0, 88) : ""} image={ele.urlToImage?ele.urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAcCQTp6jMR-GP6N8-lpccALnMtVyeX6LqA&usqp=CAU"} readmore={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/></div>
                            )
                        })
                    }
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" disabled={this.state.page === 1} onClick={this.handlePre}>&laquo; Previous</button>
                    <button type="button" className="btn btn-secondary" disabled={this.state.page > Math.ceil(this.state.total / 12)} onClick={this.handleNxt}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}
