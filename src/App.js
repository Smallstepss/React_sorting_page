import React,{useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App() {
  const ARTICLES = [
    {
      id:0,
      title: "A message to our customers",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      id:1,
      title: "Alphabet earnings",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      id:2,
      title: "Artificial Mountains",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      id:3,
      title: "Scaling to 100k Users",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      id:4,
      title: "the Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      id:5,
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      id:6,
      title: "Simple text editor has 15k monthly users",
      upvotes: 7,
      date: "2010-12-31",
    },
  ];

  //setup state to hold sorted articles
  const[sortedArticles,setSortedArticles]=useState(ARTICLES);

  //function to sort by most upvoted
  const sortByUpvotes=()=>{
    const sorted=[...sortedArticles].sort((a,b)=>b.upvotes-a.upvotes);
    setSortedArticles(sorted);
  };

  //Function to sort by most recent date

  const sortByDate=()=>{
    const sorted=[...sortedArticles].sort((a,b)=>new Date(b.date)-new Date(a.date));
    setSortedArticles(sorted);
  }

  

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button  className="small" onClick={sortByUpvotes}>Most Upvoted</button>
                <button className="small" onClick={sortByDate}>Most Recent</button>
            </div>
            <Articles articles={sortedArticles}/>
        </div>
    );

}

export default App;
