import React from 'react';
import { connect } from 'react-redux';
import * as CommonIcon from '../icons/common';
import Breadcumb from '../common/Breadcumb';
import RouterList from '../router/RouterList';
import './styles/Content.scss';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const subjects = ['Toán Học', 'Ngữ Văn', 'Hóa Học'];
    return (
      <React.Fragment>
          <div className='body content'>
            <Breadcumb />
            <div className='container'>
              <RouterList />
            </div>
          </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state, ownProps) => {

};

export default connect(mapStateToProps)(Content);
