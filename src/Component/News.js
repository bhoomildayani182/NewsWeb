import React,{useEffect, useState} from 'react'
import Newslist from './Newslist'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
    const [articles, setArticles] = useState([])    
    const [loading, setLoading] = useState(true)    
    const [page, setPage] = useState(1)    
    const [totalResults, setTotalResults] = useState(0)    
//        document.title=`${capitalizerFirstLetter(props.category)} - NewsWeb`;

       
    const capitalizerFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const UpdateNews = async ()=>{
        props.setProgress(10);
        console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedata = await data.json()
        props.setProgress(50);
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(()=>{
        UpdateNews();
    },[])
    
    const PreviousNews= async ()=>{
        setPage(page - 1);
        UpdateNews();
    }

    const NextNews= async ()=>{
        setPage(page + 1);
        UpdateNews();

    }

    const fetchMoreData = async() => {
        setPage(page + 1)
        console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedata = await data.json()
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
      };

    return (
      <>
        <h1 className='text-center' style={{margin:'34px 0px'}}>NewsWeb - Top on {capitalizerFirstLetter(props.category)}Hedlines </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
          >
        <div className='container' >
        <div className="row">
            {articles.map((element)=>{
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
            <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))} type="button" className='btn btn-dark' onClick={this.NextNews}>Next &rarr;</button>
        </div> */}
      </>
    )
}

News.callerdefaultProps={
    country:"in",
    pageSize:6,
    category:"general",
}
News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
}

export default News
