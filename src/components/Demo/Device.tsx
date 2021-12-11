import { PropsWithChildren } from 'react';
import './device.scss';

export const Device = ({ children }: PropsWithChildren<unknown>) => (
  <div className="device">
    <div className="side">
      <div className="screen">{children}</div>
    </div>
    <div className="header">
      <div className="sensor-1"></div>
      <div className="sensor-2"></div>
      <div className="sensor-3"></div>
    </div>
  </div>
);
