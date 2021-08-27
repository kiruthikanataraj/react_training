import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchListing, deleteUser } from "../actions";

import "./Styles.scss";
import trash from "../assets/images/delete.png";

class Restcall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getListing("https://jsonplaceholder.typicode.com/posts");
  }
  onDelete = (row) => {
    this.props.deleteUserInfo(row);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.loader ? (
         <h3 className="loader"> Loading ....</h3>
        ) : null }
          <table id="restCall">
            <thead>
              <tr>
                <th>Id</th>
                <th>User Id</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.fetchListing.length &&
                this.props.fetchListing
                  .filter((row, i) => i < 10)
                  .map((row, i) => {
                    return (
                      <tr key={i}>
                        <td>{row.id}</td>
                        <td>{row.userId}</td>
                        <td>{row.title}</td>
                        <td>
                          <img
                            src={trash}
                            alt="delete"
                            width="20px"
                            height="20px"
                            onClick={() => this.onDelete(row)}
                          />
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fetchListing: state.fetchListing,
    loader: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  const getListing = bindActionCreators(fetchListing, dispatch);
  const deleteUserInfo = bindActionCreators(deleteUser, dispatch);
  return {
    getListing,
    deleteUserInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restcall);
