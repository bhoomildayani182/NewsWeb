import React, { Component } from 'react'
import Newslist from './Newslist'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    

    articles = [
        // {
        //     "source": {
        //         "id": "reuters",
        //         "name": "Reuters"
        //     },
        //     "author": null,
        //     "title": "Liz Truss vows tax cuts after winning vote to be next British PM - Reuters UK",
        //     "description": "Liz Truss will become Britain's next prime minister after winning a leadership race for the governing Conservative Party on Monday, vowing to press ahead with promised tax cuts and action to tackle a deepening energy and cost of living crisis.",
        //     "url": "https://www.reuters.com/world/uk/britains-truss-expected-be-named-conservative-leader-new-pm-2022-09-05/",
        //     "urlToImage": "https://www.reuters.com/resizer/jTbPBoEgh2zNvuIMyW8FJeDafSk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WOPZRGORNBO6TKFDGD3ZXMX4Y4.jpg",
        //     "publishedAt": "2022-09-05T14:25:00Z",
        //     "content": "LONDON, Sept 5 (Reuters) - Liz Truss will become Britain's next prime minister after winning a leadership race for the governing Conservative Party on Monday, vowing to press ahead with promised tax … [+5825 chars]"
        
        // }
    ]
    static defaultProps={
        country:"in",
        pageSize:6,
        category:"general",
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    
    capitalizerFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        // console.log("I am Constructor");
        this.state={    //state use : Utomatical data Update
            articles : this.articles,
            loading : false,
            page:1,
            totalResults:0,
        }
        document.title=`${this.capitalizerFirstLetter(this.props.category)} - NewsWeb`;
    }
    async UpdateNews(){
        this.props.setProgress(10);
        console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=efe1b145a0ff46ed9b5498fc55c956f4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedata = await data.json()
        this.props.setProgress(50);
        console.log(parsedata)
        this.setState({articles: parsedata.articles, totalResults: parsedata.totalResults, loading:false,})
        this.props.setProgress(100);

    }
    async componentDidMount(){
        this.UpdateNews();
        // console.log("cdm");
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=efe1b145a0ff46ed9b5498fc55c956f4&page=1&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedata = await data.json()
        // console.log(parsedata)
        // this.setState({articles: parsedata.articles, totalResults: parsedata.totalResults, loading:false})
    }

    PreviousNews= async ()=>{
        // console.log("PreviousPage");
        // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=efe1b145a0ff46ed9b5498fc55c956f4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // {this.setState({loading : true})}
        //     let data = await fetch(url);
        //     let parsedata = await data.json()
        //     //console.log(parsedata)
        //     this.setState({articles: parsedata.articles})

        // this.setState({
            
        //     page:this.state.page-1,
        //     articles: parsedata.articles,
        //     loading:false
        // })
        this.setState({page: this.state.page -1 });
        this.UpdateNews();
    }

    NextNews= async ()=>{
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        //     console.log("NextPage");
        //     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=efe1b145a0ff46ed9b5498fc55c956f4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //     {this.setState({loading:true})}
        //         let data = await fetch(url);
        //         let parsedata = await data.json()
        //         // console.log(parsedata)
        //         this.setState({articles: parsedata.articles})

        //     this.setState({
                
        //         page:this.state.page+1,
        //         articles: parsedata.articles,
        //         loading : false
        //     })}
        this.setState({page: this.state.page + 1 });
        this.UpdateNews();

    }

    fetchMoreData = async() => {
        this.setState({page: this.state.page + 1})
        console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=efe1b145a0ff46ed9b5498fc55c956f4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({articles: this.state.articles.concat(parsedata.articles), totalResults: parsedata.totalResults})
      };

  render() {
    return (
      <>
        <h1 className='text-center' style={{margin:'34px 0px'}}>NewsWeb - Top on {this.capitalizerFirstLetter(this.props.category)}Hedlines </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          >
        <div className='container' >
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                <Newslist title={element.title} description={element.descriptiony
                } imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.PreviousNews}> &larr; Previous</button>
            <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className='btn btn-dark' onClick={this.NextNews}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News
