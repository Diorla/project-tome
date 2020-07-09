//@ts-check
import React from "react";
import { connect } from "react-redux";

const Clipboard = (props) => {
  const { aside } = props;
  return (
    <div>
      <div>
        This is will parse {aside.file} or route it to appropriate clipboard
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  aside: state.aside,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Clipboard);