import React, { Component } from 'react';
import ProductList from './ProductList';
import RegionList from './RegionList';
import SectionTitle from './SectionTitle';
import TabPanel from './TabPanel';
import UserList from './UserList';

class SalesRanking extends Component {
    constructor(props){
        super(props)
        this.handleChangeIndex = this.handleChangeIndex.bind(this)
        this.state = {
            index : 0
        }
        console.log(this.props,'SalesRanking constructor')
    }
    handleChangeIndex(index){
        console.log(index,'handleChangeIndex')
        this.setState({index})
    }
    render() {
        return (
            <div>
                <TabPanel changeIndex={this.handleChangeIndex} current={this.state.index}>
                    <ProductList items={this.props.items}/>
                    <UserList users={this.props.users} />
                    <RegionList regions={this.props.regions} />
                </TabPanel>
            </div>
        )
    }
}

export default SalesRanking;