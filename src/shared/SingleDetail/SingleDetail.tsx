import cn from 'app/helpers/cn';
import React, { ReactNode } from 'react';
import './SingleDetail.sass';

export interface SingleDetailProps {
  title: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label?: string;
  className?: string;
  render?: ReactNode;
}

const SingleDetail: React.FC<SingleDetailProps> = ({ title, icon, label, className = '', render }) => {
  if (!label && !render) return <></>;

  const Icon = icon;
  return (
    <div
      className={cn('single-detail', {
        [className]: className,
      })}
    >
      {Icon && <Icon className='single-detail__icon' />}
      {render ? (
        render
      ) : (
        <div className='single-detail__label'>
          {title && <span className='single-detail__title'>{title}</span>}
          {label}
        </div>
      )}
    </div>
  );
};

export default SingleDetail;
