import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'


const Dashboard = () => {
    return(
        <div className = ' dashboard container'>
            <div className="row"> 
                <div className="col s12 m6">
                    <ProjectList />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }

}
export default connect()(Dashboard)