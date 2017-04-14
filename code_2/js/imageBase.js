import React from 'react';
import { connect } from 'react-redux';

class Imgcom extends React.Component {
  render() {
    const { imgsrc, onClickBase } = this.props;
    return (
      <img className="base-img" onClick={onClickBase} src={imgsrc} />
    )
  }
}
const ImgBase = connect(
  (state) => ({}),
  (dispatch,ownProps) => (
    {
      onClickBase(e){
        dispatch({type: "OPEN_IMAGE_LOOKER", imgsrc: ownProps.imgsrc, event:e});
      }
    }
  )
)(Imgcom);

export default ImgBase;
