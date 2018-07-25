import React from  'react'
import cx from 'classnames'
import Select from 'react-select';

const options = [
    { value: 'tabs', label: 'Tabs' },
    { value: 'spaces', label: 'Spaces' },
];

const getValidityClassName = meta => {

    if (meta.asyncValidating) {
        return 'async-validating'
    }

    if (meta.active) {
        return
    }

    if (meta.touched && meta.invalid) {
        return 'invalid'
    }

    if (meta.touched && meta.valid) {
        return 'valid'
    }
};

export const customInput = props => {
    const {label,input,type,meta } = props
    return (
        <div
            className={cx(
                'custom-input-container',
                {'flex-row-reverse' : type === 'checkbox'},
                {dirty: meta.dirty},
                getValidityClassName(meta)
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
};

export const customSelect = props => {
    return (
        <div>
            <label>{props.label}</label>
            {/*<Select>*/}
                {/*options={options}*/}
            {/*</Select>*/}

            <select {...props.input}>
                <option value="tabs">Tabs</option>
                <option value="spaces">Spaces</option>
            </select>
        </div>
    )
};