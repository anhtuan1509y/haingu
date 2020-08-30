import React from 'react';
import { connect } from 'react-redux';
import './styles/Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <React.Fragment>
        <div className='header'>
          <img className='header-logo' src='../../images/logo.png' alt='logo' />
          <div className='lop-10'>
            Luyện thi vào lớp 10
          </div>
          <div className='dai-hoc'>
            Luyện thi THPT Quốc Gia
          </div>
          <div className='avatar'>
            <img src='../../images/default-avatar.jpg' alt='avatar' />
          </div>
        </div>
      </React.Fragment>
    );
  }
}


// const mapStateToProps = (state, ownProps) => {

// };

// export default connect(mapStateToProps)(Content);
export default Header;