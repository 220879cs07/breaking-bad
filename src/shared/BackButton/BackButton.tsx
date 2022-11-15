import cn from 'app/helpers/cn';
import { ReactComponent as ArrowIcon } from '../../assets/img/icons/arrow-left.svg';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BackButton.sass';

export interface BackButtonProps {
  label: string;
  to?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to, label, className = '' }) => {
  const navigate = useNavigate();

  return (
    <div
      className={cn('back-button', {
        [className]: className,
      })}
    >
      {to ? (
        <Link to={to} className='back-button__link'>
          <ArrowIcon className='back-button__icon' />
        </Link>
      ) : (
        <div className='back-button__link' onClick={() => navigate(-1)}>
          <ArrowIcon className='back-button__icon' />
        </div>
      )}
      <div className='back-button__label'>{label}</div>
    </div>
  );
};

export default BackButton;
