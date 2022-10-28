import cn from 'classnames';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import UITooltip from '../UITooltip/UITooltip';
import UIButtonContent from './components/UIButtonContent';
import { ICommonButton, IUIButtonLink, IUIButtonProps } from './types';
import './UIButton.sass';

const UIButton: React.FC<IUIButtonProps> = (props) => {
  const { tooltip } = props;
  const render = () => {
    const {
      className = '',
      icon,
      color = 'primary',
      text,
      to,
      loading,
      disabled,
      onClick,
      outline,
      size,
      fluid,
      tooltip,
      square,
      count,
      fitContent,
      ...rest
    } = props;
    const defaultProps = {
      icon,
      color,
      text,
      loading,
    };
    const Content = UIButtonContent;
    Content.defaultProps = defaultProps;
    const classNames = cn('ui-button', {
      [`ui-button--${color}`]: color,
      'ui-button__loading': loading,
      'ui-button__outline': outline,
      'ui-button__fluid': fluid,
      'ui-button__disabled': disabled,
      'ui-button__square': square,
      'ui-button__fit-content': fitContent,
      [`ui-button--${size}`]: size,
      [className]: className,
    });

    if (to && !loading && !disabled) {
      return (
        <Link className={classNames} {...(rest as IUIButtonLink)} to={to}>
          <Content />
        </Link>
      );
    }

    return (
      //@ts-ignore
      <button
        tabIndex={0}
        className={classNames}
        disabled={disabled || loading}
        {...(rest as ICommonButton)}
        {...(loading || disabled ? {} : { onClick })}
      >
        {icon === 'filter' && !!count && <span className='ui-button__filter-count'>{count}</span>}
        <Content />
      </button>
    );
  };
  return (
    <UITooltip title='' {...tooltip}>
      {render()}
    </UITooltip>
  );
};

export default React.memo(UIButton, _.isEqual);
