import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'react-tippy';

class ClipboardEnabledText extends React.Component{
    state = {
        copied: false
    }

    copyText = (e) => {
        e.preventDefault();

        this.selectText(e);
        document.execCommand('copy');
        this.setState({ copied: true});
    }

    selectText = (event) => {
        var selection = window.getSelection();            
        var range = document.createRange();
        range.selectNodeContents(event.target);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    render(){
        return (
            <Tooltip
                title="Copied!"
                trigger="click"
                hideDelay="1000"
                inertia="true"
                size="small"
                distance="0"
                ref={tooltip => (this.tooltip = tooltip)}>
                <code onMouseMove={() => this.tooltip.hideTooltip()}>
                    {/* eslint-disable-next-line */}
                    <a href="#" onClick={this.copyText}>{this.props.content}</a>
                </code>
            </Tooltip>

        )
    }
}

ClipboardEnabledText.propTypes = {
    content: PropTypes.string.isRequired
}

export default ClipboardEnabledText;