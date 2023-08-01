import React, { Component } from 'react'
import Cards from './Cards'
// import news from '../news.json';

export default class NewsItems extends Component {
    constructor() {
        super();
        this.state = {
            arr: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-07-30&to=2023-07-30&sortBy=popularity&apiKey=4d6e4c8b65ff41af8835fb88010e5f8f&page=${this.state.page}&pageSize=12`;
        let data = await fetch(url);
        let finalData = await data.json();
        this.setState({ arr: finalData.articles, total: finalData.totalResults });
    }

    handlePre = async () => {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-07-30&to=2023-07-30&sortBy=popularity&apiKey=4d6e4c8b65ff41af8835fb88010e5f8f&page=${this.state.page - 1}&pageSize=12`;
        let data = await fetch(url);
        let finalData = await data.json();
        this.setState({
            arr: finalData.articles,
            page: this.state.page - 1
        });
    }

    handleNxt = async () => {
        if (this.state.page > Math.ceil(this.state.total / 12)) {

        } else {
            let url = `https://newsapi.org/v2/everything?q=apple&from=2023-07-30&to=2023-07-30&sortBy=popularity&apiKey=4d6e4c8b65ff41af8835fb88010e5f8f&page=${this.state.page + 1}&pageSize=12`;
            let data = await fetch(url);
            let finalData = await data.json();
            this.setState({
                arr: finalData.articles,
                page: this.state.page + 1
            });
        }

    }

    
    render() {
        return (
            <div className='container my-3'>
                <div className="row">
                    {
                        this.state.arr.map((ele, idx) => {
                            return (
                                <div key={idx} className="col-md-4"><Cards title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description ? ele.description.slice(0, 88) : ""} image={ele.urlToImage} readmore={ele.url} /></div>
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
