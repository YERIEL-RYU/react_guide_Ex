import React, { Component } from 'react';
import SalesRanking from './components/SalesRanking';

const productData = [
  {name:'Product1', url:'http://r-0o0-j.tistory.com/1'},
  {name:'Product2', url:'http://r-0o0-j.tistory.com/2'},
  {name:'Product3', url:'http://r-0o0-j.tistory.com/3'},
  {name:'Product4', url:'http://r-0o0-j.tistory.com/4'}
]

const users = [
  {name:'user00'},
  {name:'user01'},
  {name:'user02'},
]

const regions = [
  {name:'Korea', code:'KO'},
  {name:'Japan', code:'JP'},
]
class App extends Component {
  render() {
    return (
      <div>
        <SalesRanking items={productData} users={users} regions={regions}/>
      </div>
    );
  }
}

export default App;