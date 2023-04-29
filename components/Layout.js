import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
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
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2023 The Dressing Room</p>
        </footer>
      </div>
    </>
  );
}
