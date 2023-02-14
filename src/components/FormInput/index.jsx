import { useCallback, useEffect, useRef, useState } from 'react'
import './styles.scss'

const InputTypes = {
  TEXT: 'text',
}

export const FormInput = ({
  name,
  label,
  value,
  placeholder,
  type = InputTypes.TEXT,
  disabled,
  onChange,
  onBlur,
  autoFocus,
  error,
  ...rest
}) => {
  const inputRef = useRef(null)
  const [hasFocus, setFocus] = useState(false)

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  const hanldeOnFocus = useCallback(() => {
    setFocus(true)
    rest.onFocus && rest.onFocus()
  }, [rest])

  const handleOnBlur = useCallback(() => {
    setFocus(false)
    onBlur && onBlur()
  }, [onBlur])

  return (
    <div
      className={`form-input-container ${
        hasFocus ? 'form-input-container-focus' : ' '
      }`}
    >
      {label ? <p className="form-input-label">{label}</p> : null}
      <input
        {...rest}
        className="form-input"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleOnBlur}
        onFocus={hanldeOnFocus}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        ref={inputRef}
      />
      {error && <p className="form-input-error">{error}</p>}
    </div>
  )
}
