"use client"
import React, { useEffect } from 'react';


function Ring() {
    useEffect(() => {
        const circlePath = document.querySelector('#circle');
        const textPath = document.querySelector('.ring-text textPath');
        const circleLength = circlePath.getTotalLength();
        textPath.setAttribute('textLength', circleLength);
      }, []);
  return (


           
            <div className="relative flex items-center justify-center w-[89.01px] h-[77px]">
                <svg className='absolute inset-0 mx-auto my-auto w-12 h-12' width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_320_1573)">
<path fillRule="evenodd" clipRule="evenodd" d="M25.0947 11.7924L48.4566 13.7011C49.9468 16.7413 50.2256 20.3116 49.0898 23.6051C48.7435 24.6846 48.2316 25.7223 47.5693 26.7192L24.7006 60.8084C20.6575 66.8424 12.4605 68.4614 6.40977 64.4379L5.8614 64.081C-0.190515 60.0581 -1.81766 51.9156 2.21241 45.8816L25.0947 11.7924ZM39.415 21.2303C37.9173 22.89 36.0925 23.3062 34.5503 22.8999C32.8655 22.5238 31.4912 21.1761 31.1826 19.3777C30.975 18.1699 31.2916 16.996 31.9633 16.078C31.9683 16.0679 31.9721 16.0581 31.9759 16.0483C31.9803 16.0371 31.9847 16.026 31.9906 16.0145C32.0099 15.9947 32.03 15.9782 32.05 15.9618C32.0693 15.946 32.0886 15.9302 32.1071 15.9115C32.754 15.1125 33.6723 14.5256 34.769 14.3387C35.4128 14.2296 36.0442 14.2759 36.6366 14.4331C39.2402 15.02 41.0911 17.9233 39.415 21.2303ZM16.0093 56.737C14.024 58.1193 11.2883 57.6396 9.89789 55.6643C8.50806 53.6889 8.99075 50.9663 10.976 49.5834C12.9613 48.2011 15.6976 48.6808 17.0874 50.6562C18.4773 52.6315 17.9946 55.3541 16.0093 56.737Z" fill="#06AED4"/>
<path fillRule="evenodd" clipRule="evenodd" d="M59.0812 29.7093L69.6707 45.5708C73.829 51.8421 72.2737 60.1604 66.197 64.1499L65.6468 64.5118C59.5695 68.5014 51.2714 66.6518 47.1131 60.3811L36.5236 44.519C32.3647 38.2476 34.3035 29.4904 40.3808 25.5002C46.4575 21.5107 54.9229 23.4379 59.0812 29.7093ZM48.0282 40.5958C45.6395 41.0021 43.3723 39.404 42.964 37.0273C42.5562 34.6506 44.1617 32.3947 46.5504 31.9884C48.939 31.5821 51.2063 33.1802 51.6146 35.5569C52.0229 37.9336 50.4169 40.1895 48.0282 40.5958ZM59.6996 58.1386C57.3109 58.5449 55.0431 56.9468 54.6353 54.5701C54.227 52.1934 55.8325 49.9375 58.2211 49.5312C60.6104 49.1255 62.8776 50.723 63.286 53.0997C63.6937 55.4764 62.0882 57.7323 59.6996 58.1386Z" fill="#06A94B"/>
<path fillRule="evenodd" clipRule="evenodd" d="M58.7642 29.2123C58.8057 29.2818 58.8473 29.3517 58.89 29.4214C62.5706 35.7094 60.9825 43.6781 55.1301 47.5197L54.5792 47.8736C48.5757 51.8101 40.3606 49.9692 36.0753 43.7619C36.0539 43.7513 36.0493 43.7407 36.0417 43.7232C36.0396 43.7184 36.0373 43.713 36.0344 43.7071C35.9792 43.6386 35.9247 43.5702 35.8832 43.5018L25.0682 27.3067C20.825 20.909 22.6907 12.0377 28.7767 8.04693C30.8976 6.65727 33.3179 5.99327 35.7512 6.00005C40.2869 6.01238 44.8721 8.33609 47.6375 12.5008L58.4383 28.6958C58.5559 28.8627 58.6596 29.0366 58.7642 29.2123ZM39.7806 19.6425C39.4306 21.1277 38.3004 22.3417 36.7792 22.7997C36.7396 22.8117 36.7002 22.8241 36.6608 22.8365C36.5258 22.8791 36.3908 22.9216 36.2469 22.9465C33.8582 23.3521 31.591 21.7547 31.1827 19.3774C31.0804 18.783 31.1052 18.1955 31.236 17.6431C31.5891 16.1424 32.7386 14.9199 34.2821 14.4729C34.3274 14.4597 34.3722 14.4457 34.4171 14.4317C34.5321 14.3958 34.6469 14.3599 34.7691 14.3391C35.367 14.2374 35.9575 14.2614 36.5133 14.3915C38.0135 14.7417 39.2379 15.8749 39.6927 17.3995C39.7058 17.4441 39.7198 17.4884 39.7338 17.5326C39.7723 17.6548 39.811 17.7776 39.8333 17.9069C39.9356 18.5025 39.9114 19.0895 39.7806 19.6425ZM48.0276 40.5958C45.6389 41.0021 43.3717 39.404 42.9634 37.0273C42.5551 34.6506 44.1611 32.3947 46.5498 31.9884C48.9385 31.5821 51.2057 33.1802 51.614 35.5569C52.0224 37.9336 50.4163 40.1895 48.0276 40.5958Z" fill="#CD378D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M40.3824 25.5002C46.3934 21.5532 54.7355 23.404 58.9403 29.5151C62.5521 35.7883 60.956 43.6984 55.1321 47.5209L54.5812 47.8748C48.5838 51.807 40.3805 49.9734 36.0915 43.7816C32.5379 37.5775 34.5374 29.3369 40.3824 25.5002ZM42.9632 37.0272C43.3715 39.4039 45.6388 41.002 48.0274 40.5957C50.4161 40.1894 52.0222 37.9335 51.6138 35.5568C51.2055 33.18 48.9383 31.582 46.5496 31.9883C44.1609 32.3946 42.5549 34.6505 42.9632 37.0272Z" fill="#00880D"/>
</g>
<defs>
<clipPath id="clip0_320_1573">
<rect width="72" height="72" fill="white"/>
</clipPath>
</defs>
</svg>


                <div className="relative text-center text-zinc-900 text-[15px] font-semibold font-['Maison Neue'] leading-normal">
        
                        <svg className="ring-text" viewBox="0 0 100 100" width="100" height="100">
      <defs>
        <path id="circle"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
      </defs>
      <text fontSize="16" fontWeight="600" letterSpacing="2.2">
     
        <textPath xlinkHref="#circle">
        <tspan fill="#CBD5E1">·</tspan>
      <tspan fill="#E53198">asphalt</tspan>
      <tspan fill="#CBD5E1">·</tspan>
      <tspan fill="#06AED4">design</tspan>
      <tspan fill="#CBD5E1">·</tspan>
      <tspan fill="#00880D">system</tspan>
      
        </textPath>
      </text>
    </svg>
                </div>
             </div>
        
  
  );
}

export default Ring;