import React from "react";
import Card from "../common/Card";
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from "react-redux";
import { createCardAction } from "../../actions/cards";


function Board() {
  const cards = useSelector(state => {
    return state.cards;
  });

  const onHandleCreateCard = e => {
  };

  const hasData = !isEmpty(cards);

  return hasData ? (
    <div>
    <div>
     <button onClick={onHandleCreateCard}/>
    </div>
    <div className="flex flex-wrap">
      {Object.entries(cards)
        .map(([key, value]) => {
          console.log(value);
          return (
            <div key={value.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card title={value.title} text={value.text}/>
            </div>
          );
        })
        .reverse()}
    </div>
    </div>
  ) : (
    <Card title="Nothing here" text="NOthing here"/>
  );
}

export default Board;
