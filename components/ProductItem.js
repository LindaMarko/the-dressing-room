/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link
        href={`/product/${product.slug}`}
        className="flex flex-col items-center justify-center p-4 pb-0 md:p-0"
      >
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow h-72 md:w-full md:h-72 xl:h-96"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-3 pb-4">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg font-semibold">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
