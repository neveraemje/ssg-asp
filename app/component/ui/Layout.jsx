// // components/Layout.jsx
// import React from 'react';

// const Left = ({ children }) => <div className="w-1/5 p-4 bg-gray-200">{children}</div>;
// const Middle = ({ children }) => <div className="w-3/5 p-4 bg-white">{children}</div>;
// const Right = ({ children }) => <div className="w-1/5 p-4 bg-gray-200">{children}</div>;

// const Layout = ({ children }) => {
//   const [left, middle, right] = React.Children.toArray(children);

//   return (
//     <div className="flex max-w-7xl mx-auto">
//       {left}
//       {middle}
//       {right}
//     </div>
//   );
// };

// Layout.Left = Left;
// Layout.Middle = Middle;
// Layout.Right = Right;

// export default Layout;

// components/Layout.jsx
import React from 'react';

const Left = ({ children }) => <div className=" w-[320px] hidden sm:block border-r border-zinc-100 dark:border-zinc-700">{children}</div>;
const Middle = ({ children }) => <div className="flex-grow w-full">{children}</div>;
const Right = ({ children }) => <div className="p-4 w-1/6 hidden sm:block">{children}</div>;

const ThreeSidesLayout = ({ children }) => {
  const [left, middle, right] = React.Children.toArray(children);

  return (
    <div className="flex max-w-7xl mx-auto">
      {left}
      {middle}
      {right}
    </div>
  );
};

ThreeSidesLayout.Left = Left;
ThreeSidesLayout.Middle = Middle;
ThreeSidesLayout.Right = Right;

const TwoSidesLayout = ({ children }) => {
  const [left, middle] = React.Children.toArray(children);

  return (
    <div className="flex max-w-7xl mx-auto">
      {left}
      {middle}
    </div>
  );
};

TwoSidesLayout.Left = Left;
TwoSidesLayout.Middle = Middle;

export { ThreeSidesLayout, TwoSidesLayout };

