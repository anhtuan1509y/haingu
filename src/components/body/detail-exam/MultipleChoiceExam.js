import React from 'react';
import { connect } from 'react-redux';
import './styles/MultipleChoiceExam.scss';

class MultipleChoiceExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const subjects = ['Toán Học', 'Ngữ Văn', 'Hóa Học'];
    return (
      <React.Fragment>
        <div className='MultipleChoiceExam'>

        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state, ownProps) => {

};

export default connect(mapStateToProps)(MultipleChoiceExam);
