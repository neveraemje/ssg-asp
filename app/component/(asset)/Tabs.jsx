"use client"
import React, { useState } from 'react';

function Tabs() {
  const [isActive, setIsActive] = useState('delivery'); // Set the initial active status

  const handleClick = (type) => {
    setIsActive(type);
  };

  return (
    <div className="w-[188px] h-11 p-2 left-[343px] top-[18px] absolute rounded-[22px] shadow justify-center items-center gap-1 inline-flex">
      <div
        className={`w-[88px] px-2 py-1 rounded-[14px] justify-center items-center gap-1 flex hover:cursor-pointer ${isActive === 'delivery' ? 'bg-green-700' : ''}`}
        onClick={() => handleClick('delivery')}
      >
        <div className="justify-center items-center flex">
          <div className="w-4 h-4 relative">
            <div className={`w-4 h-4 left-0 top-0 absolute ${isActive === 'delivery' ? 'bg-green-700' : ''}`} />
            <div className="w-4 h-4 absolute">
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill={isActive === 'delivery' ? 'white' : '#757575'} // Set the fill color based on the active state
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8978 9.65826C10.8955 9.66034 10.8932 9.66243 10.8932 9.66659C10.8516 9.69993 10.8182 9.73327 10.7849 9.76661L10.7849 9.76662L10.7848 9.76664C10.2855 10.2669 9.97616 10.9505 9.97616 11.7092C9.97616 12.0009 10.0178 12.2844 10.1012 12.5428C9.64267 12.5929 9.11744 12.6262 8.54302 12.6262C8.42547 12.6262 8.30041 12.6262 8.18369 12.6179L8.19203 12.6262C7.65846 12.6262 6.93314 12.6262 6.15029 12.5762C6.22449 12.3344 6.25784 12.0843 6.25784 11.8259C6.25784 10.3002 5.04064 9.058 3.47328 8.98296C3.42325 8.97463 3.37323 8.97463 3.32321 8.97463C2.37279 8.97463 1.53158 9.40815 0.988842 10.0918C0.878817 9.67002 0.912201 9.19897 0.944421 8.74433C0.956147 8.57887 0.967719 8.41559 0.972168 8.25765C0.997179 7.48231 1.55576 6.90706 2.37279 6.90706H7.35833C7.8919 6.90706 8.30875 7.33224 8.2754 7.8408C8.2754 7.8408 8.38378 8.59946 7.45004 8.54944C7.45004 8.54944 7.10822 9.27476 7.49172 9.95839C7.9586 10.8171 9.63434 10.9005 10.1346 9.48318C10.5606 8.316 10.7265 7.14049 9.71771 3.99745C9.71771 3.99745 9.1758 4.11417 8.62556 3.91408C8.41713 3.8724 8.33376 3.714 8.33376 3.55559V3.55559C8.33376 3.47222 8.33376 3.43054 8.37545 3.35551C8.5005 3.18877 8.66724 3.11373 8.83398 3.14708C9.05075 3.18877 9.34338 3.23045 9.50928 3.18877L9.38423 2.87196C9.21749 2.46345 9.59265 2.06327 10.0512 2.18833C10.6014 2.30505 11.2859 2.5885 11.536 3.31382C11.9075 4.42828 11.2073 4.20215 10.9426 4.11667L10.9349 4.11417C11.2859 4.28091 13.1284 5.16463 14.0113 7.94918C14.1038 8.316 13.9196 8.66616 13.6203 8.82456C13.5361 8.87458 13.436 8.90793 13.3276 8.91627C13.3035 8.9246 13.2776 8.9246 13.2526 8.9246C13.2276 8.9246 13.2034 8.9246 13.1692 8.91627C13.1442 8.91627 13.1192 8.91627 13.095 8.90793L13.0704 8.90569L13.0704 8.90569C12.9876 8.89816 12.9117 8.89126 12.8274 8.89126H12.8107C12.6115 8.89126 12.4189 8.90793 12.2021 8.95795C11.7028 9.05799 11.2601 9.3081 10.9024 9.64992C10.9024 9.65409 10.9001 9.65617 10.8978 9.65826ZM3.32335 9.8083C3.3567 9.8083 3.38171 9.8083 3.41506 9.81664C4.53222 9.85916 5.42428 10.742 5.42428 11.8258C5.42428 12.0676 5.38259 12.2936 5.29922 12.502C5.23253 12.6846 5.13248 12.8596 5.00743 13.018C4.69062 13.4441 4.19874 13.735 3.63182 13.81C3.53177 13.8276 3.43173 13.8351 3.32335 13.8351C2.56468 13.8351 1.88938 13.4441 1.52255 12.8596C1.50187 12.8286 1.4844 12.7947 1.46616 12.7593C1.45498 12.7376 1.44351 12.7154 1.43084 12.6929L1.42045 12.6727C1.39723 12.6278 1.37026 12.5756 1.35581 12.5178C1.3308 12.4595 1.31412 12.4019 1.29745 12.3427C1.2641 12.2177 1.23909 12.0926 1.23075 11.9592C1.22242 11.9101 1.22242 11.8675 1.22242 11.8258C1.22242 11.7433 1.23075 11.6591 1.23909 11.5757L1.24679 11.5376C1.2609 11.4675 1.275 11.3975 1.28911 11.334C1.33914 11.1756 1.3975 11.0255 1.48087 10.8838C1.47253 10.8838 1.47253 10.8763 1.47253 10.8763C1.82268 10.2335 2.52299 9.8083 3.32335 9.8083ZM13.0751 9.64553C13.0459 9.64136 13.0167 9.64136 12.9867 9.64136C11.8279 9.64136 10.8866 10.5434 10.8866 11.6547C10.8866 11.6981 10.8866 11.7423 10.8949 11.7873C10.9625 12.8378 11.8737 13.6673 12.9867 13.6673C14.1456 13.6673 15.0868 12.7652 15.0868 11.6547C15.0868 10.5718 14.1922 9.68971 13.0751 9.64553ZM4.29168 6.26128H1.83218C1.50491 6.26128 1.23848 5.95922 1.23848 5.58689V4.01817C1.23848 3.64584 1.50491 3.34378 1.83218 3.34378H4.29168C4.61894 3.34378 4.88538 3.64584 4.88538 4.01817V5.58689C4.88538 5.95922 4.61894 6.26128 4.29168 6.26128Z"
                />
              </svg>
            </div>
            {/* <img className={`w-[16px] h-[16px] absolute ${isActive === 'delivery' ? 'text-white' : 'text-neutral-500'}`} src="./delivery.svg" alt="Delivery" /> */}
          </div>
        </div>
        <div className={`text-xs font-semibold leading-5 ${isActive === 'delivery' ? 'text-white' : 'text-neutral-500'}`}>
          Delivery
        </div>
      </div>



      
      <div
        className={`w-20 px-2 py-1 rounded-[14px] justify-center items-center gap-1 flex hover:cursor-pointer ${isActive === 'pickup' ? 'bg-green-700' : ''}`}
        onClick={() => handleClick('pickup')}
      >
        <div className="justify-center items-center flex">
          <div className="w-4 h-4 relative">
            <div className={`w-4 h-4 left-0 top-0 absolute ${isActive === 'pickup' ? 'bg-green-700' : ''}`} />
            <div className="w-4 h-4 absolute">
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill={isActive === 'pickup' ? 'white' : '#757575'} // Set the fill color based on the active state
              >
            <g clipPath="url(#clip0_220_753129)">
            <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M5.63258 5.27349L5.70377 5.30793L6.57181 5.85681C6.66211 5.91458 6.7758 5.92569 6.87461 5.89125L6.94579 5.85681L7.81064 5.30793C7.90095 5.25126 8.01464 5.24015 8.11345 5.27349L8.18463 5.30793L9.05161 5.85681C9.14192 5.91458 9.25454 5.92569 9.35335 5.89125L9.4256 5.85681L10.2936 5.30793C10.3839 5.25015 10.4966 5.23904 10.5964 5.27349L10.6676 5.30793L11.5367 5.85681C11.626 5.91458 11.7397 5.92569 11.8385 5.89125L11.9097 5.85681L12.6598 5.38348C12.7692 5.31349 12.919 5.3546 12.9742 5.46682L13.1283 5.78347C13.6893 6.92678 13.9857 8.16897 13.9985 9.43116C14.007 10.6667 13.9815 11.9989 13.889 13.0244C13.8104 13.8999 13.072 14.581 12.1625 14.6588L11.9904 14.6666H4.01019C3.0221 14.6666 2.19443 13.9544 2.11156 13.0244C2.01912 11.9989 1.99363 10.6667 2.00212 9.43116C2.01487 8.16897 2.3113 6.92678 2.87122 5.78347L3.02635 5.46682C3.07203 5.37348 3.18359 5.33015 3.28346 5.35793L3.34084 5.38348L4.08775 5.85681C4.17806 5.91458 4.29175 5.92569 4.39162 5.89125L4.46174 5.85681L5.32978 5.30793C5.42009 5.25015 5.53271 5.23904 5.63258 5.27349ZM8.00083 7.89453C6.82467 7.89453 5.8727 8.87895 5.8727 10.0923C5.8727 11.3056 6.82467 12.2889 8.00083 12.2889C9.17485 12.2889 10.1279 11.3056 10.1279 10.0923C10.1279 8.87895 9.17485 7.89453 8.00083 7.89453ZM8.00083 8.87117C8.65318 8.87117 9.18229 9.41783 9.18229 10.0923C9.18229 10.7656 8.65318 11.3122 8.00083 11.3122C7.34741 11.3122 6.8183 10.7656 6.8183 10.0923C6.8183 9.41783 7.34741 8.87117 8.00083 8.87117ZM13.5767 1.33325C13.8104 1.33325 13.9995 1.53658 13.9995 1.78657V3.28098C13.9995 3.46764 13.8954 3.63542 13.7339 3.70541L12.0446 4.44095C11.9383 4.48762 11.8183 4.47317 11.7237 4.4054L10.7909 3.72875C10.6761 3.64431 10.5231 3.64431 10.4084 3.72875L9.51591 4.37651C9.4001 4.45984 9.24817 4.45984 9.13342 4.37651L8.24201 3.72875C8.12726 3.64431 7.97533 3.64431 7.85952 3.72875L6.97023 4.3754C6.85442 4.45984 6.70249 4.45984 6.58668 4.37651L5.69527 3.72875C5.58052 3.64431 5.42753 3.64431 5.31278 3.72875L4.37781 4.40762C4.28537 4.47428 4.16744 4.48873 4.06332 4.4454L2.27305 3.70208C2.10943 3.63431 2 3.46542 2 3.27654V1.78657C2 1.53658 2.19018 1.33325 2.42393 1.33325H13.5767Z"/>
            </g>
            <defs>
            <clipPath id="clip0_220_753129">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </div>
            {/* <img className={`w-4 h-4 absolute ${isActive === 'pickup' ? 'text-white' : 'text-neutral-500'}`} src="./pickup.svg" alt="Pickup" /> */}
          </div>
        </div>
        <div className={`text-xs font-semibold leading-5 ${isActive === 'pickup' ? 'text-white' : 'text-neutral-500'}`}>
          Pickup
        </div>
      </div>
    </div>

//   <div class="switches-container left-[150px] top-[18px]">
//   <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked" />
//   <input type="radio" id="switchYearly" name="switchPlan" value="Yearly" />
//   <label for="switchMonthly">

//     Delivery</label>
//   <label for="switchYearly">Pickup</label>
//   <div class="switch-wrapper">
//     <div class="switch">
//       <div>
//       <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="white" // Set the fill color based on the active state
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M10.8978 9.65826C10.8955 9.66034 10.8932 9.66243 10.8932 9.66659C10.8516 9.69993 10.8182 9.73327 10.7849 9.76661L10.7849 9.76662L10.7848 9.76664C10.2855 10.2669 9.97616 10.9505 9.97616 11.7092C9.97616 12.0009 10.0178 12.2844 10.1012 12.5428C9.64267 12.5929 9.11744 12.6262 8.54302 12.6262C8.42547 12.6262 8.30041 12.6262 8.18369 12.6179L8.19203 12.6262C7.65846 12.6262 6.93314 12.6262 6.15029 12.5762C6.22449 12.3344 6.25784 12.0843 6.25784 11.8259C6.25784 10.3002 5.04064 9.058 3.47328 8.98296C3.42325 8.97463 3.37323 8.97463 3.32321 8.97463C2.37279 8.97463 1.53158 9.40815 0.988842 10.0918C0.878817 9.67002 0.912201 9.19897 0.944421 8.74433C0.956147 8.57887 0.967719 8.41559 0.972168 8.25765C0.997179 7.48231 1.55576 6.90706 2.37279 6.90706H7.35833C7.8919 6.90706 8.30875 7.33224 8.2754 7.8408C8.2754 7.8408 8.38378 8.59946 7.45004 8.54944C7.45004 8.54944 7.10822 9.27476 7.49172 9.95839C7.9586 10.8171 9.63434 10.9005 10.1346 9.48318C10.5606 8.316 10.7265 7.14049 9.71771 3.99745C9.71771 3.99745 9.1758 4.11417 8.62556 3.91408C8.41713 3.8724 8.33376 3.714 8.33376 3.55559V3.55559C8.33376 3.47222 8.33376 3.43054 8.37545 3.35551C8.5005 3.18877 8.66724 3.11373 8.83398 3.14708C9.05075 3.18877 9.34338 3.23045 9.50928 3.18877L9.38423 2.87196C9.21749 2.46345 9.59265 2.06327 10.0512 2.18833C10.6014 2.30505 11.2859 2.5885 11.536 3.31382C11.9075 4.42828 11.2073 4.20215 10.9426 4.11667L10.9349 4.11417C11.2859 4.28091 13.1284 5.16463 14.0113 7.94918C14.1038 8.316 13.9196 8.66616 13.6203 8.82456C13.5361 8.87458 13.436 8.90793 13.3276 8.91627C13.3035 8.9246 13.2776 8.9246 13.2526 8.9246C13.2276 8.9246 13.2034 8.9246 13.1692 8.91627C13.1442 8.91627 13.1192 8.91627 13.095 8.90793L13.0704 8.90569L13.0704 8.90569C12.9876 8.89816 12.9117 8.89126 12.8274 8.89126H12.8107C12.6115 8.89126 12.4189 8.90793 12.2021 8.95795C11.7028 9.05799 11.2601 9.3081 10.9024 9.64992C10.9024 9.65409 10.9001 9.65617 10.8978 9.65826ZM3.32335 9.8083C3.3567 9.8083 3.38171 9.8083 3.41506 9.81664C4.53222 9.85916 5.42428 10.742 5.42428 11.8258C5.42428 12.0676 5.38259 12.2936 5.29922 12.502C5.23253 12.6846 5.13248 12.8596 5.00743 13.018C4.69062 13.4441 4.19874 13.735 3.63182 13.81C3.53177 13.8276 3.43173 13.8351 3.32335 13.8351C2.56468 13.8351 1.88938 13.4441 1.52255 12.8596C1.50187 12.8286 1.4844 12.7947 1.46616 12.7593C1.45498 12.7376 1.44351 12.7154 1.43084 12.6929L1.42045 12.6727C1.39723 12.6278 1.37026 12.5756 1.35581 12.5178C1.3308 12.4595 1.31412 12.4019 1.29745 12.3427C1.2641 12.2177 1.23909 12.0926 1.23075 11.9592C1.22242 11.9101 1.22242 11.8675 1.22242 11.8258C1.22242 11.7433 1.23075 11.6591 1.23909 11.5757L1.24679 11.5376C1.2609 11.4675 1.275 11.3975 1.28911 11.334C1.33914 11.1756 1.3975 11.0255 1.48087 10.8838C1.47253 10.8838 1.47253 10.8763 1.47253 10.8763C1.82268 10.2335 2.52299 9.8083 3.32335 9.8083ZM13.0751 9.64553C13.0459 9.64136 13.0167 9.64136 12.9867 9.64136C11.8279 9.64136 10.8866 10.5434 10.8866 11.6547C10.8866 11.6981 10.8866 11.7423 10.8949 11.7873C10.9625 12.8378 11.8737 13.6673 12.9867 13.6673C14.1456 13.6673 15.0868 12.7652 15.0868 11.6547C15.0868 10.5718 14.1922 9.68971 13.0751 9.64553ZM4.29168 6.26128H1.83218C1.50491 6.26128 1.23848 5.95922 1.23848 5.58689V4.01817C1.23848 3.64584 1.50491 3.34378 1.83218 3.34378H4.29168C4.61894 3.34378 4.88538 3.64584 4.88538 4.01817V5.58689C4.88538 5.95922 4.61894 6.26128 4.29168 6.26128Z"
//                 />
//               </svg>
//         Delivery</div>
//       <div>Pickup</div>
//     </div>
//   </div>
// </div>
  );
}

export default Tabs;
