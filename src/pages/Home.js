import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageProfile, Heading, ImageMember, Button } from '../components/Atoms'
import { DetailProfile, DetailMember } from '../components/Molecules'
import { Block } from '../components/Organisms'
import {
  Media,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { UserActionCreator } from '../actions';

const mapStateToProps = (state) => {
  return {
    members: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchData: () => dispatch(UserActionCreator.fetchData()),
    // register: (data) => dispatch(UserActionCreator.register(data)),
    // login: (data) => dispatch(UserActionCreator.login(data)),
    // logout: () => dispatch(UserActionCreator.logout()),
    showEight: () => dispatch(UserActionCreator.showEight())
  };
};

class Home extends Component {
  constructor(props){
    super(props);
    this.state =  {
      imgStyle : {
        'width': '200',
        'height': '200'
      },
      imgProfileSrc: 'https://via.placeholder.com/200x200',
      imgMemberSrc: 'https://via.placeholder.com/100x100',
      passMeetUpData: [
        {
          date: '27 November 2017',
          title: "#39 JakartaJS April Meetup with kumparan",
          participant: 139
        },
        {
          date: '27 October 2017',
          title: "#38 JakartaJS April Meetup with Blibli",
          participant: 113
        },
        {
          date: '27 September 2017',
          title: "#39 JakartaJS April Meetup with Hacktiv8",
          participant: 110
        },
        {
          date: '27 September 2017',
          title: "#39 JakartaJS April Meetup with Hacktiv8",
          participant: 110
        },
        {
          date: '27 September 2017',
          title: "#39 JakartaJS April Meetup with Hacktiv8",
          participant: 110
        }
      ],
      isSeePast: false,
      isSeeMember: false,
      listMember: []
    }
  }

  clickShowEight = () => {
    this.props.showEight();
    // return console.log(this.props.members.number);
  }

  checkSeeMember = () => {
    if (!this.state.isSeeMember) {
      return this.renderSeeMember();
    }
    else{
     return this.seeAllMember();
    }
  }


  componentDidMount() {
    // fetch("https://randomuser.me/api/?results=5&nat=au")
    //   .then(res => res.json())
    //   .then(parsedJSON => parsedJSON.results.map(data => (
    //     {
    //       firstName: `${data.name.first}`,
    //       lastName: `${data.name.last}`,
    //       email: `${data.email}`,
    //       thumbnail: `${data.picture.large}`,
    //     }
    //   )))
    //   .then(listMember => this.setState({
    //     listMember,
    //     isLoaded: false
    //   }))
    //   .catch(error => console.log('parsing failed', error))
  }

  renderSeeMember = () => {
    return this.state.listMember.map((member, i) =>{
      const { email, firstName, lastName, thumbnail } = member;
      if(i < 1){
        return (
          <Block key={i}>
            <Media>
              <Media.Left>
                <ImageMember src={thumbnail} />
              </Media.Left>
              <Media.Body>
                <Media.Heading>{ email }</Media.Heading>
                  <p>{firstName} {lastName} <span>4 others</span></p>
              </Media.Body>
            </Media>
          </Block>
        );
      }
    })
  }

  seeAllMember = () => {
    return this.state.listMember.map((member, i) =>{
      const { email, firstName, lastName, thumbnail } = member;
      return (
        <Block key={i}>
          <Media>
            <Media.Left>
              <ImageMember src={thumbnail} />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Media Heading</Media.Heading>
                <p>{ email }</p>
                <p>{firstName} {lastName}<span>4 others</span></p>
            </Media.Body>
          </Media>
        </Block>
      );
    })
  }

  checkSeePast = () => {
    if (!this.state.isSeePast) {
      return this.renderSeePast();
    }
    else{
     return this.seeAllPast();
    }
  }

  renderSeePast = () => {
    return this.state.passMeetUpData.map((schedule, i) =>{
      const { date, title, participant } = schedule;
      if(i <= 2){
        return (
          <Block key={i}>
            <p>{date}</p>
            <hr/>
            <p>{title}</p>
            <p>{participant.toString()} <span className="textGray">went</span></p>
            <Button btnProps={{text: "View", size: "small"}}/>
          </Block>
        );
      }
    })
  }

  seeAllPast = () => {
    return this.state.passMeetUpData.map((schedule, i) =>{
      const { date, title, participant } = schedule;
      return (
        <Block key={i}>
          <p>{date}</p>
          <hr/>
          <p>{title}</p>
          <p>{participant.toString()} <span className="textGray">went</span></p>
          <Button btnProps={{text: "View", size: "small"}}/>
        </Block>
      )
    })
  }


  render() {
    console.log(this.props.members.number);
    const { links, imgStyle, imgProfileSrc, imgMemberSrc, passMeetUpData, isSeeMember, isSeePast } = this.state;
    const { seeAllPast, checkSeePast, checkSeeMember, renderSeeMember, renderSeePast, clickShowEight } = this;
    return (
      <div>
        <div style={{ 'margin': '10px' }}>
          <Block>
            <div style={{ 'display': 'flex' }}>
              <ImageProfile imgStyle={imgStyle} src={imgProfileSrc} />
              <DetailProfile btnProps="Join Us"/>
            </div>
          </Block>
        </div>
        <Heading text="Next Meetup"/>
        <div style={{ 'margin': '10px' }}>
          <Block>
            <p onClick={clickShowEight}><strong>Awesome meetup and event</strong></p>
            <p className="date">25 January 2019</p>
            <p className="bodyText">Hello JavaScripts &amp; Node.js Ninjas! <br/>Get Ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! <br/>The meetup format will contain some short stories and technical talks.<br/>If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.<br/><br/>Remember to bring a photo ID to get through builing security.<br/><br/>----<br/><br/>See you there!<br/><br/>Best,Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers</p>
          </Block>
        </div>
        <Heading text="About Meetup"/>
        <div style={{ 'margin': '0 10px' }}>
          <p>Come and meet other developers interested in the Javascript and it's library in the Greater Jakarta area.</p>
          <p>Twitter: @JakartaJS and we use the hashtag #jakartajs</p>
        </div>
        <Heading text="Members">
          <a href=""
            onClick={(e) => {
              e.preventDefault();
              return this.setState({isSeeMember: !this.state.isSeeMember})
            }}>{(!isSeeMember) ? 'See all' : 'See Less'}</a>
        </Heading>
        <div style={{ 'margin': '10px' }}>
          { checkSeeMember() }
        </div>
        <Heading text="Past Meetup">
          <a href=""
            onClick={(e) => {
              e.preventDefault();
              return this.setState({isSeePast: !this.state.isSeePast})
            }}>{(!isSeePast) ? 'See all' : 'See Less'}</a>
        </Heading>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
            { checkSeePast() }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
