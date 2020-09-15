import React from 'react';
import { connect } from 'react-redux';
import { getAvatar, changeLayout } from 'actions/userActions';
import MainContent from 'components/body/layout/MainContent';
import { Link, Redirect } from 'react-router-dom';
import { subjects2 } from 'actions/common/getInfo';
import HighSchoolTable from './home-content/HighSchoolTable';
import CollegeTable from './home-content/CollegeTable';

import './styles/Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAvatar();
  }

  getExamBySubject = (subject) => {

  }


  render() {
    const { location, activeSub } = this.props;
    return (
      <MainContent>
        <h2 className='title-center'>
          THI THỬ ONLINE
        </h2>
        {/* <Link exact to='/admin' onClick={() => this.props.changeLayout(1)}>Admin</Link> */}
        <div className='home'>
          <div className='img-btn d-flex'>
            <div className='img-btn-item d-table' onClick={() => window.location.pathname = `${location.pathname}lop-10`}>
              <div className='d-table-cell'>
                Ôn thi
                  <br />
                  vào lớp 10
                </div>
            </div>
            <div className='img-btn-item d-table' onClick={() => window.location.pathname = `${location.pathname}dai-hoc`}>
              <div className='d-table-cell'>
                Luyện đề
                  <br />
                  THPT Quốc Gia
                </div>
            </div>
          </div>

          <HighSchoolTable />
          <CollegeTable />
          
          
        </div>
      </MainContent>
    );
  }
}


// const mapStateToProps = (state, ownProps) => {

// };

export default connect(
  null,
  {
    getAvatar,
    changeLayout,
  }
)(Home);
