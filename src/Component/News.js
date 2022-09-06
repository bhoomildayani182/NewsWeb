import React, { Component } from 'react'
import Newslist from './Newslist'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Liz Truss vows tax cuts after winning vote to be next British PM - Reuters UK",
            "description": "Liz Truss will become Britain's next prime minister after winning a leadership race for the governing Conservative Party on Monday, vowing to press ahead with promised tax cuts and action to tackle a deepening energy and cost of living crisis.",
            "url": "https://www.reuters.com/world/uk/britains-truss-expected-be-named-conservative-leader-new-pm-2022-09-05/",
            "urlToImage": "https://www.reuters.com/resizer/jTbPBoEgh2zNvuIMyW8FJeDafSk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WOPZRGORNBO6TKFDGD3ZXMX4Y4.jpg",
            "publishedAt": "2022-09-05T14:25:00Z",
            "content": "LONDON, Sept 5 (Reuters) - Liz Truss will become Britain's next prime minister after winning a leadership race for the governing Conservative Party on Monday, vowing to press ahead with promised tax … [+5825 chars]"
        
        }
    ]
    constructor(){
        super();
        console.log("I am Constructor");
        this.state={
            articles : this.articles,
            loading : false,
            page:1
        }
    }
    async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=efe1b145a0ff46ed9b5498fc55c956f4&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedata = await data.json()
        console.log(parsedata)
        this.setState({articles: parsedata.articles, totalResults: parsedata.totalResults})
    }

    PreviousNews= async ()=>{
        console.log("PreviousPage");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=efe1b145a0ff46ed9b5498fc55c956f4&page=${this.state.page-1}&pageSize=20`;
            let data = await fetch(url);
            let parsedata = await data.json()
            console.log(parsedata)
            this.setState({articles: parsedata.articles})

        this.setState({
            
            page:this.state.page-1,
            articles: parsedata.articles
        })
    }

    NextNews= async ()=>{
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
            console.log("NextPage");
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=efe1b145a0ff46ed9b5498fc55c956f4&page=${this.state.page+1}&pageSize=20`;
                let data = await fetch(url);
                let parsedata = await data.json()
                console.log(parsedata)
                this.setState({articles: parsedata.articles})

            this.setState({
                
                page:this.state.page+1,
                articles: parsedata.articles
            })}
    }

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsWeb - Top Hedlines</h1>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                <Newslist title={element.title} description={element.descriptiony
                } imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
        
        </div>
        <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.PreviousNews}> &larr; Previous</button>
            <button type="button" className='btn btn-dark' onClick={this.NextNews}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
