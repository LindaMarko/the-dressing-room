import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from '@/utils/Store';
import DropdownLink from './DropdownLink';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <Head>
        <title>
          {title ? title + ' - the dressing room' : 'the dressing room'}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="top-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between font-poppins">
        <header>
          <nav className="flex h-12 items-center px-4 md:px-10 justify-between shadow-md">
            <Link href="/" className="text-lg md:text-2xl font-bold">
              the dressing room
            </Link>
            <div>
              <Link href="/cart" className="p-4 text-sm md:text-base">
                Cart
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-emerald-500 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-emerald-400 text-sm md:text-base">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg text-sm md:text-base">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login" className="p-2 text-sm md:text-base">
                  Login
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container max-w-7xl m-auto mt-12 mb-18 px-8">
          {children}
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner mt-40 text-xs">
          <p>copyright © 2023 the dressing room</p>
        </footer>
      </div>
    </>
  );
}
