import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import MainPage from '../MainPage/MainPage';
import NewQuestionPage from '../NewQuestionPage/NewQuestionPage';
import LoginPage from '../LoginPage/LoginPage';
import QuestionDetailPage from '../QuestionDetailPage/QuestionDetailPage';
import RegisterPage from '../RegisterPage/RegisterPage';

class App extends Component {

// 初始化元件的狀態
state = {
  data: [], //empty array
  id: 0,
  message: null,
  intervalIsSet: false,
  idToDelete: null,
  idToUpdate: null,
  objectToUpdate: null,
};

// 當元件載入時，它首先要從資料庫中獲取所有的資料，這裡會設定一個輪詢邏輯，及時將資料在 `UI` 中更新。
componentDidMount() {
  this.getDataFromDb();
  if (!this.state.intervalIsSet) {
    let interval = setInterval(this.getDataFromDb, 1000); // 1000ms = 1s
    this.setState({ intervalIsSet: interval });
  }
}

// 永遠不要讓一個程序持續存在
// 當我們結束使用時，一定要殺死這個程序
componentWillUnmount() {
  if (this.state.intervalIsSet) {
    clearInterval(this.state.intervalIsSet);
    this.setState({ intervalIsSet: null });
  }
}


// 我們的第一個使用後端api的get方法
// 從我們的資料庫中獲取資料
getDataFromDb = () => {
  fetch('http://localhost:3001/api/getData')
    .then((data) => data.json())
    .then((res) => this.setState({ data: res.data }));
};

// 使用 put 方法，在資料庫裡面插入一條新的資料
putDataToDB = (message) => {
  let currentIds = this.state.data.map((data) => data.id);
  let idToBeAdded = 0;
  while (currentIds.includes(idToBeAdded)) {
    ++idToBeAdded;
  }

  axios.post('http://localhost:3001/api/putData', {
    id: idToBeAdded,
    message: message,
  });
};

// 我們的刪除方法使用我們的後端api
// 刪除現有資料庫資訊
deleteFromDB = (idTodelete) => {
  parseInt(idTodelete);
  let objIdToDelete = null;
  this.state.data.forEach((dat) => {
    if (dat.id == idTodelete) {
      objIdToDelete = dat._id;
    }
  });

  axios.delete('http://localhost:3001/api/deleteData', {
    data: {
      id: objIdToDelete,
    },
  });
};

// 我們的更新方法使用我們的後端api
// 覆蓋現有的資料庫資訊
updateDB = (idToUpdate, updateToApply) => {
  let objIdToUpdate = null;
  parseInt(idToUpdate);
  this.state.data.forEach((dat) => {
    if (dat.id == idToUpdate) {
      objIdToUpdate = dat._id;
    }
  });

  axios.post('http://localhost:3001/api/updateData', {
    id: objIdToUpdate,
    update: { message: updateToApply },
  });
};




  render() {
    // return (
    //   <BrowserRouter>
    //     {/* The corresponding component will show here if the current URL matches the path */}
        
    //     <Route path="/" exact component={MainPage} />
    //     <Route path="/LoginPage" exact component={LoginPage} />
    //     <Route path="/NewQuestionPage" exact component={NewQuestionPage} />
    //     <Route path="/QuestionDetailPage" exact component={QuestionDetailPage} />
    //     <Route path="/RegisterPage" exact component={RegisterPage} />
        

    //   </BrowserRouter>
    // );
    return (
      <div>
        <ul>
          {this.data.length <= 0
            ? 'NO DB ENTRIES YET'
            : this.data.map((dat) => (
                <li style={{ padding: '10px' }} key={this.data.message}>
                  <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                  <span style={{ color: 'gray' }}> data: </span>
                  {dat.message}
                </li>
              ))}
        </ul>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
            style={{ width: '200px' }}
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            ADD
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToDelete: e.target.value })}
            placeholder="put id of item to delete here"
          />
          <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
            DELETE
          </button>
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: '200px' }}
            onChange={(e) => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.updateToApply)
            }
          >
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

export default App;