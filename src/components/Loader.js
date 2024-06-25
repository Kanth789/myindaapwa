import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

function Loader(props) {
  const { size } = props;
  return (
    <div className="flex h-screen items-center justify-center">
      <CircularProgress size={size} />
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.string,
};

Loader.defaultProps = {
  size: '4rem',
};

export default Loader;
