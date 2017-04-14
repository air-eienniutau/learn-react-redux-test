import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect,Provider } from 'react-redux';


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

const reducer = (state = {isShow: false, imgsrc: ""}, action) =>{
  switch (action.type){
    case "OPEN_IMAGE_LOOKER":
      let $elem = action.event.target;
      let pos = {left: 0, top: 0};
      if ($elem.offsetParent){
        let $offset = $elem;
        while ($offset.offsetParent){
          pos.top += $offset.offsetTop;
          pos.left += $offset.offsetLeft;
          $offset = $offset.offsetParent;
        }
        $offset = null;
      }else if($elem.x){
        pos.left += $elem.x;
      }else if($elem.x){
        pos.top += $elem.y;
      }

      let position = {
        width:$elem.clientWidth,
        height:$elem.clientHeight,
        left:pos.left - window.screenLeft,
        top:pos.top - window.screenTop
      };

      return {isShow: true, imgsrc: action.imgsrc, position: position};
    case "CLOSE_iMAGE_LOOKER":
      return {isShow: false, imgsrc: ""};
    default:
      return state;
  }
};
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <VisibleImageLooker>
      <ImgBase imgsrc={"http://kami.im/img/Konachan.jpg"}/>
    </VisibleImageLooker>
  </Provider>,
  document.querySelector("#example")
);