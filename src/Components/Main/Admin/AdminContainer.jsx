import React from "react";
import { connect } from "react-redux";
import Admin from "./Admin";
mapDispatchToProps = (dispatch) => {

}

mapStateToProps = (state)=>{

}

export const AdminContainer = connect(mapStateToProps,mapDispatchToProps)(Admin);