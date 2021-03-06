import React, {PropTypes} from 'react';

function stepButton({onClick}) {
  return (
    <a className="button is-primary fa fa-step-forward" onClick={onClick}>
    </a>
  );
}

stepButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default stepButton;
