import React, { Component } from 'react';
import ReactPageScroller from "react-page-scroller";
import {Pagination} from "react-bootstrap";
import './home.scss';

import Header from '../header/header';
import Profile from '../page/profile/profile';
import Picture from '../page/picture/picture';
import Skil from '../page/skils/skil';
class home extends Component {
    state ={
        currentPage : 1
    }
        componentDidMount =() =>{
          // console.log(this.state.currentPage);
      }
      goToPage = (pageNumber) => {
          this.reactPageScroller.goToPage(pageNumber);
        }
  
      pageOnChange = (number) => {
          // console.log(number)
          this.setState({currentPage: number} , () =>  console.log(this.state.currentPage));
      };
      getPagesNumbers = () => {
          const {currentPage} =this.state
          const pageNumbers = [];
          const pageNumber = 3;
          const dot = (i) =>{
              console.log(i)
              if(currentPage === i ){
                  return (<div className = {currentPage === 1 ? "bigdot bg-white" : "bigdot bg-black"} ></div>)
              }
              return (<div  className={currentPage === 1 ? "dot bg-white" : "dot bg-black"} key ={i}></div>)
          }
  
          for (let i = 1; i <= pageNumber; i++) {
              pageNumbers.push(
                  <Pagination.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{dot(i)}</Pagination.Item>
              )
          }
  
          return [...pageNumbers];
      };
  
      menuClick = ( event)=> {
          const {id} = event.target
          this.goToPage(parseInt(id -1))
          // console.log(event.target.id)
      }
    render() {
        const pagesNumbers = this.getPagesNumbers();
        // const maxWidth = 1024;
        // const { currentPage } =this.state;
        return (
            <div>
                {/* menu = {currentPage  === 1 ? whiteMenu : BlackMenu} logo = {currentPage === 1 ? WhiteLogo :  Logo } menuClick ={this.menuClick}> */}
                <Header ></Header>
                <ReactPageScroller 
                    ref={c => this.reactPageScroller = c}
                    transitionTimingFunction = "ease"
                    animationTimer = {700}
                    pageOnChange={this.pageOnChange}
                    
                    >
                    <Profile></Profile>
                    <Skil></Skil>
                    <Picture ></Picture>
                   
                </ReactPageScroller>
                <Pagination className="pagination-additional-class" bsSize="large">
                    {pagesNumbers}
                </Pagination>
            </div>
        );
    }
}

export default home;