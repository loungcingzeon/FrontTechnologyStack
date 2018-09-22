import React, { PureComponent,Fragment } from 'react';import { connect } from 'react-redux';import { login } from './Auth.redux';import { Redirect } from 'react-router-dom';import {Button} from 'antd-mobile';/** * 两个 reducers, 每个 reducers 都有一个state * 合并 reduce */@connect(  state=>state,  {login})class Auth extends PureComponent{  render(){    //console.log('this.props==>',this.props.auth.isAuth);    return (      <Fragment>        { this.props.auth.isAuth ? <Redirect to='/dashboard'></Redirect> : null }        <h2>你没有，需要登录才能看</h2>        <Button onClick={this.props.login}>登录</Button>      </Fragment>    )  }}export default  Auth;