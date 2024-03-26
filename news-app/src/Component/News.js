import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps ={  // defining props in class component
    country: "in",
    pageSize: 8,
    category: "general"
  }

  static defaultProps = { // defining types of proptype
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  
   
    // articles = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Jack Hobbs",
    //         "title": "Over 450 Jewish Hollywood creatives denounce Jonathan Glazer's 'Zone of Interest' Oscars speech in open letter - New York Post ",
    //         "description": "“We refute our Jewishness being hijacked for the purpose of drawing a moral equivalence between a Nazi regime that sought to exterminate a race of people, and an Israeli nation that seeks to …",
    //         "url": "https://nypost.com/2024/03/19/entertainment/jewish-hollywood-stars-pen-open-letter-to-zone-of-interest-director-jonathan-glazer/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/03/2024-dolby-theatre-ovation-hollywood-78625219.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "2024-03-19T13:22:08Z",
    //         "content": "More than 450 Jewish creatives and professionals in Hollywood are denouncing “The Zone of Interest” director Jonathan Glazers speech from the 2024 Oscars.\r\nIn his speech, Glazer, 58, drew parallels b… [+5229 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "KSL.com"
    //         },
    //         "author": "https://www.facebook.com/kslcom/",
    //         "title": "Sunset rocket launch shines in Southern Utah sky - KSL.com",
    //         "description": "With its reuse, launches of SpaceX's Falcon 9 rocket from the West Coast might seem routine, but they still provoke a",
    //         "url": "https://www.ksl.com/article/50954766/sunset-rocket-launch-shines-in-southern-utah-sky",
    //         "urlToImage": "https://img.ksl.com/slc/2980/298045/29804534.jpeg?filter=kslv2/responsive_story_lg",
    //         "publishedAt": "2024-03-19T13:21:15Z",
    //         "content": "Estimated read time: Less than a minute\r\nST. GEORGE With its reuse, launches of SpaceX's Falcon 9 rocket from the West Coast might seem routine, but they still provoke a \"What was that?\" reaction whi… [+846 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "KTLA Los Angeles"
    //         },
    //         "author": "Miranda Nazzaro, The Hill",
    //         "title": "Intermittent fasting tied to a higher risk of cardiovascular death - KTLA Los Angeles",
    //         "description": "Intermittent fasting, which involves eating during a six-to-eight-hour window and fasting for the remaining 16 to 18 hours, has increased in popularity over the past 10 years.",
    //         "url": "https://ktla.com/news/intermittent-fasting-tied-to-a-higher-risk-of-cardiovascular-death-research-shows/",
    //         "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2024/03/CA_Mediterranean_diet-e1710854195706.jpg?w=1280",
    //         "publishedAt": "2024-03-19T13:17:59Z",
    //         "content": "(The Hill) – Intermittent fasting a diet that cycles between voluntary fasting and non-fasting periods could be linked to a higher risk of dying from cardiovascular disease, according to a new analys… [+3055 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "nfl-news",
    //             "name": "NFL News"
    //         },
    //         "author": null,
    //         "title": "Daniel Jeremiah 2024 NFL mock draft 3.0: Vikings go get J.J. McCarthy; Jets jump for Marvin Harrison Jr. - NFL.com",
    //         "description": "In his third mock of the 2024 NFL Draft, Daniel Jeremiah projects the Jets and Vikings will trade into the top five to take big swings at addressing needs on offense. Check out the full first-round projection, 1-32.",
    //         "url": "https://www.nfl.com/news/daniel-jeremiah-2024-nfl-mock-draft-3-0",
    //         "urlToImage": "https://static.www.nfl.com/image/upload/t_editorial_landscape_12_desktop/league/mw1u6cid4r67xhtavojf",
    //         "publishedAt": "2024-03-19T12:48:00Z",
    //         "content": "Normally, I don't introduce trades in my mocks until the final version is released on the eve of Round 1 (SEE: last year's 4.0), but it feels like the Minnesota Vikings' recent acquisition of a secon… [+2104 chars]"
    //     }
    // ];


    constructor() {
        super();
        console.log("this is constructor");
        this.state = { // it is used to set state
            articles: this.articles, //calling article array
            loading: true,
            page: 1,
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89ef9d2b48eb40ec84101ddb3e4804d5&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ 
          articles: parsedData.articles, 
          totalResults: parsedData.totalResults, 
          loading: false 
        })
    } 

   updateNews =  async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89ef9d2b48eb40ec84101ddb3e4804d5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    this.updateNews();

   }

    handleNextPage = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89ef9d2b48eb40ec84101ddb3e4804d5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page + 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({page: this.state.page +1})
        this.updateNews();
    }

    handlePrePage = async () => {
      // if(!(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
      //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89ef9d2b48eb40ec84101ddb3e4804d5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      //   this.setState({loading:true})/**loading is thrue whilw data is fetching */
      //   let data = await fetch(url);
      //   let parsedData = await data.json();
      //   console.log(parsedData);
      //   this.setState({
      //       page: this.state.page - 1,
      //       articles: parsedData.articles,
      //       loading: false /**loading is false when data is fully fetched */
      //   })
      this.setState({page: this.state.page -1})
        this.updateNews();
      
     
    }

    render() {
        return (
            <>
                <div className='container my-3'>
                  <h1 className="text-center" style={{margin:"40px 0px"}}>NewsMonkey - Top Headlines</h1>
                  {/** {this.state.loading && <Spinner/>}  it says that if loading is true then show spinner otherwise not */}
                    <div className="row">
       {!this.state.loading && this.state.articles.map((element)=>{  {/**it says when loading is  false then show the cart content otherwise not */}
             return  <div className="col-md-4 my-4" key={element.url}>
               <NewsItem  title = {element.title?element.title.slice(0,45):""} description= {element.description?element.description.slice(0,90):""} imageURL= {element.urlToImage} newsURL = {element.url} author ={element.author} date = {element.publishedAt} source = {element.source.name}/>          
             </div>
        })};
        </div>
        <div className="container d-flex justify-content-between my-4">
        <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrePage}>&larr; Previous</button>
      <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextPage}>Next &rarr;</button>
        </div>
        
     </div>
      </>
    )
  }
}

export default News;
