import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ImgBase from './imageBase';
import VisibleImageLooker from './imageLooker';

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