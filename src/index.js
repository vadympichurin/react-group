import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('root'));

// const link = React.createElement(
//     'div',
//     { className: 'product' },
//     React.createElement('img', {
//     className: 'image',
//     src: 'https://placeimg.com/320/240/arch',
//     alt: 'yummi',
//     }),
//     React.createElement('h2', { className: 'name' }, 'Raging waffles'),
//     React.createElement('p', { className: 'price' }, '20$'),
//     React.createElement(
//     'button',
//     { className: 'btn', type: 'button' },
//     'Add to cart',
//     ),
// );

// const Product = () => (
//     <div className="product">
//         <img
//         className="image"
//         src="https://placeimg.com/320/240/arch"
//         alt="yummi"
//         />
//         <h2 className="name">Raging waffles</h2>
//         <p className="text">20$</p>
//         <button className="btn" type="button">
//         Add to cart
//         </button>
//         </div>
// );



ReactDOM.render(<App /> , document.querySelector('#root'));

