import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';

const styles = {
  container: {
    padding: 0,
    width: 32,
    height: 32,
  },
};

export default class CloseButton extends Component {
  static contextTypes = {
    mosaicActions: PropTypes.object,
    getMosaicPath: PropTypes.func,
  };

  render() {
    return (
      <IconButton
        onClick={() => {
          this.context.mosaicActions.remove(this.context.getMosaicPath());
        }}
        style={styles.container}
      >
        <Close color="white" />
      </IconButton>
    );
  }
}
