import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import './index.styl';

const CLOSE_TIMEOUT = 500;

Modal.setAppElement('body');

export default function ReactSlidingPane({
    isOpen,
    title,
    subtitle,
    onRequestClose,
    closeOnDocument=false,
    onAfterOpen,
    children,
    className,
    overlayClassName,
    from = 'right',
    width
}) {
    const directionClass = `slide-pane_from_${from}`;

    return <Modal
        ariaHideApp={false}
        className={ `slide-pane ${directionClass} ${className || ''}` }
        style={{
            content: { width: width || '80%' }
        }}
        overlayClassName={ `slide-pane__overlay ${overlayClassName || ''}`}
        closeTimeoutMS={ CLOSE_TIMEOUT }
        isOpen={ isOpen }
        onAfterOpen={ onAfterOpen }
        onRequestClose={ closeOnDocument ? onRequestClose : () => {}}
        contentLabel={ `Modal "${title || ''}"` }>
        <div className='slide-pane__header'>
            <div className='slide-pane__close' onClick={ onRequestClose }>
                <svg viewBox='0 0 13 22' version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="11" 
                          x2="11" y2="1" 
                          stroke="black" 
                          strokeWidth="2"/>
                    <line x1="1" y1="1" 
                          x2="11" y2="11" 
                          stroke="black" 
                          strokeWidth="2"/>
                </svg>
            </div>
            <div className='slide-pane__title-wrapper'>
                <h2 className='slide-pane__title'>{ title }</h2>
                <div className='slide-pane__subtitle'>{ subtitle }</div>
            </div>
        </div>
        <div className='slide-pane__content'>
            { children }
        </div>
    </Modal>;
}

ReactSlidingPane.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeOnDocument: PropTypes.bool,
    title: PropTypes.any,
    subtitle: PropTypes.any,
    onRequestClose: PropTypes.func,
    onAfterOpen: PropTypes.func,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    from: PropTypes.oneOf(['left', 'right']),
    width: PropTypes.string
};
