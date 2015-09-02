import React, {Component} from 'react';

export default class HeaderLogo extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100" className="headerLogo">
        <defs>
          <linearGradient id="headerLogoGradientFirst" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop id="headerLogoGradientFirstTop" offset="0%"/>
            <stop id="headerLogoGradientFirstBottom" offset="100%"/>
          </linearGradient>
          <linearGradient id="headerLogoGradientMiddle" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop id="headerLogoGradientMiddleTop" offset="0%"/>
            <stop id="headerLogoGradientMiddleBottom" offset="100%"/>
          </linearGradient>
          <linearGradient id="headerLogoGradientLast" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop id="headerLogoGradientLastTop" offset="0%"/>
            <stop id="headerLogoGradientLastBottom" offset="100%"/>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <circle cx="50" cy="50" r="50" fill="url(#headerLogoGradientFirst)" />
          <circle cx="110" cy="50" r="50" fill="url(#headerLogoGradientLast)"/>
          <path fill="url(#headerLogoGradientMiddle)" d="M80 90c12-9 20-23.6 20-40s-8-31-20-40c-12 9-20 23.6-20 40s8 31 20 40z"/>
        </g>
      </svg>
    );
  }
}
