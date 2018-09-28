import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '../../Atoms';
import { UserActionCreator } from '../../../actions';

const mapStateToProps = (state) => {
  return {
    members: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showObj: () => dispatch(UserActionCreator.showObj())
  };
};

class DetailProfile extends React.Component {

  clickShowObj = () => {
    this.props.showObj();
    // return console.log(this.props.members.number);
  }

  render () {
    console.log(this.props.members.dataUser);
    const { btnProps } = this.props;
    const { clickShowObj } = this;
    return (
      <div className="detailProfile">
        <p className="detailTitle" onClick={clickShowObj}>Hacktiv8 Meetup</p>
        <dl>
          <dt>Location</dt>
          <dd>Jakarta, Indonesia</dd>
          <dt>Members</dt>
          <dd>1,078</dd>
          <dt>Organizer</dt>
          <dd>Adhy Wiranata</dd>
        </dl>
        <Button btnProps={btnProps}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (DetailProfile);
