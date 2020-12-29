import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cardArr = [
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    price: '$12',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },

  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },

  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
  {
    image:
      'https://s3.amazonaws.com/redqteam.com/pickbazar/Roadstar_solid_top.jpg',
    name: 'Roadster Women Solid Top',
    stock: '1 pc(s)',
    minusPrice: '$15',
    price: '$12',
    discount: '20%',
  },
];

export const ShopPage = () => {
  return (
    <section>
      <div className='p-5 my-5 text-center'>
        <h1>
          <i>Shop</i>
        </h1>
        <h4 className='fw-normal col-xl-7 mx-auto'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          odio eius debitis laudantium praesentium dolores temporibus nostrum
          ipsa quibusdam sit?
        </h4>
      </div>
      <div className='row'>
        <div className='col-lg-2 bg-white border-right'>Sidebar</div>
        <div className='col bg-light p-4'>
          <div className='row row-cols-1 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 justify-content-center'>
            {cardArr.map((cardArr) => (
              <Link className='col text-decoration-none small bg-white pb-3 rounded-3 m-3 d-flex flex-column'>
                <div className='position-relative'>
                  <img
                    height={240}
                    width='100%'
                    src={cardArr.image}
                    alt={cardArr.name}
                  />
                  <span className='badge bg-warning rounded-pill position-absolute end-0 mt-3'>
                    {cardArr.discount}
                  </span>
                </div>
                <div className='fw-bold'>{cardArr.name}</div>
                <div className='mb-3'>{cardArr.stock}</div>
                <i className='text-decoration-line-through text-danger'>
                  {cardArr.minusPrice}
                </i>
                <div className='d-flex align-items-baseline justify-content-between mt-auto'>
                  <span className='fw-bold'>{cardArr.price}</span>
                  <button className='btn btn-sm btn-light rounded-pill'>
                    <FontAwesomeIcon icon={faCartPlus} />
                    <span className='ms-2 small fw-bold'>Cart</span>
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <div className='text-center pt-3'>
            <button className='btn btn-outline-secondary'>Load More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
