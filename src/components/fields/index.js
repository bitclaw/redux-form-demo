import React from  'react'
import cx from 'classnames'

export const customInput = props => {
    const {label,input,type,meta } = props
    return (
        <div
            className={cx(
                'custom-input-container',
                {'flex-row-reverse' : type === 'checkbox'},
                {dirty: meta.dirty},
            )}
        >
            <input {...props.input}
                   type={props.type} />
            <label>{props.label}</label>
            {(meta.error && meta.touched) && (
                <div className="feedback-text error-text">{meta.error}</div>
            )}
        </div>
    )
}

export const customSelect = props => {
    return (
        <div>
            <label>{props.label}</label>
            <select {...props.input}>
                <option value="tabs">Tabs</option>
                <option value="spaces">Spaces</option>
            </select>
        </div>
    )
}