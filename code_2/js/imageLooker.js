import React from 'react';
import { connect } from 'react-redux';

class Imagelooker extends React.Component {
  componentWillUpdate(nextProps, nextState){
    const { isShow, position } = nextProps;
    if(isShow){
      let $popimg = this.refs.popimg;
      Object.assign($popimg.style,{
        width: position.width+"px",
        height: position.height+"px",
        left: position.left+"px",
        top: position.top+"px",
        marginLeft: 0,
        marginTop: 0
      });
      $popimg.onload = () => {
        let setWidth = window.innerWidth * 0.4;
        let setHeight = setWidth * position.height / position.width;
        Object.assign($popimg.style,{
          width: setWidth+"px",
          height: setHeight+"px",
          left: "50%",
          top: "50%",
          marginLeft: -setWidth/2+"px",
          marginTop: -setHeight/2+"px"
        });
      };
    }
  }
  componentDidUpdate(prevProps, prevState){
    const { isShow, position } = this.props;
    if(isShow){
    }
  }
  render(){
    const { isShow, onClickClose, imageLink, children } = this.props;
    return (
      <div className="wrap" >
        {children}
        <div className={isShow?"s-show":"s-hide"}>
          <div className="pop-layer" onClick={onClickClose}></div>
          <img className="pop-img" src={imageLink} ref="popimg"/>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    isShow: state.isShow,
    imageLink: state.imgsrc,
    position: state.position
  }
);
const mapDispatchToProps = (dispatch,ownProps) => (
  {
    onClickClose() {
      dispatch({type: "CLOSE_iMAGE_LOOKER"});
    }
  }
);
const VisibleImageLooker = connect(
  mapStateToProps,
  mapDispatchToProps
)(Imagelooker);

export default VisibleImageLooker;
