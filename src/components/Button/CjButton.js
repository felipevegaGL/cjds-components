import PropTypes from 'prop-types'
import { MDCRipple } from '@material/ripple'
import './CjButton.scss'

const callbackRef = node => node && new MDCRipple(node)

const CONTAINED_CLASS = '.mdc-button--raised'
const OUTLINED_CLASS = '.mdc-button--outlined'
const ICON_CLASS = '.mdc-button--leading'

const getButtonType = typeProp => {
  switch(typeProp) {
    case 'primary':
    case 'secondary':
    case 'tertiary':
      return CONTAINED_CLASS
    case 'line':
      return OUTLINED_CLASS
    case 'ghost':
      return '';
    case 'rounded':
      return ''
  }
}

export const CjButton = (props) => {
  const {
    label = '',
    type = 'primary',
    icon = '',
    onClick,
    disabled
  } = props

  return (
    <button
      className={`mdc-button ${type} mdc-button-raised`}
      ref={callbackRef}
      onClick={event => onClick(event)}
      disabled={disabled}
    >
      <span className="mdc-button__ripple"></span>
      <span className="mdc-button__label">{label}</span>
    </button>
  )
}

CjButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'primary', 
    'secondary',
    'tertiary',
    'tertiary-icon',
    'line',
    'ghost',
    'rounded',
  ]),
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}