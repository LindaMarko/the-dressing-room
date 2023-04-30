import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '@/utils/Store';

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <>
      <Head>
        <title>
          {title ? title + ' - The Dressing Room' : 'The Dressing Room'}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-6 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              the dressing room
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container max-w-7xl m-auto mt-12 mb-18 px-8">
          {children}
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner mt-40">
          <p>Copyright © 2023 The Dressing Room</p>
        </footer>
      </div>
    </>
  );
}
