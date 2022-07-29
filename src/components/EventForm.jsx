import React, { useContext, useState } from "react";
import { ADD_OPERATION_LOG, CREATE_EVENT, DELETE_ALL_EVENTS } from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const {state, dispatch} = useContext(AppContext);

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601()
    })

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENTS
      })

      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました。' ,
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  const unCreatable = title === "" || body === "" ;

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            type="text"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventTitle">ボディー</label>
          <textarea
            className="form-control"
            type="text"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;