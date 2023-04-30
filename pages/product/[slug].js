import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import { Store } from '../../utils/Store';

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);

  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Produt Not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <Layout title={product.name}>
      <div className="py-4">
        <Link href="/"> &#8592; Back to products</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-4">
        <div className="md:col-span-1">
          <Image
            src={product.image}
            alt={product.name}
            width={340}
            height={340}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg font-semibold">{product.name}</h1>
            </li>
            <li>
              <em>Category</em>: {product.category}
            </li>
            <li>
              <em>Brand</em>: {product.brand}
            </li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li className="mt-4">
              <em>Description</em>: {product.description}
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
