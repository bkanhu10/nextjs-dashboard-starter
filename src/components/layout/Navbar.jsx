"use client";
// import { Bell, CircleUserRound } from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";
import { toast } from "@/hooks/use-toast";
import { logout } from "@/lib/api";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

const Navbar = () => {
  const { role, user, handleLogout } = useAuth();
  const router = useRouter();

  const [profileDropdown, setProfileDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [ordersDropdown, setOrdersDropdown] = useState(false);
  // Refs to track dropdown elements
  const profileRef = useRef(null);
  const productsRef = useRef(null);
  const featuresRef = useRef(null);
  const ordersRef = useRef(null);

  const handleProfileToggle = () => {
    setProfileDropdown(!profileDropdown);
  };

  const handleUserLogout = async () => {
    console.log("logout button clicked");
    handleLogout();
    try {
      const res = await logout();
      if (res.status === 200) {
        router.push("/login");
        console.log("Logout successful");
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong while logging out",
      });
    }
  };

  const handleProductsDropdown = () => {
    setProductsDropdown(!productsDropdown);
  };

  const handleFeaturesDropdown = () => {
    setFeaturesDropdown(!featuresDropdown);
  };
  const handleOrdersDropdown = () => {
    setOrdersDropdown(!ordersDropdown);
  };

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileDropdown(false);
    }
    if (productsRef.current && !productsRef.current.contains(event.target)) {
      setProductsDropdown(false);
    }
    if (featuresRef.current && !featuresRef.current.contains(event.target)) {
      setFeaturesDropdown(false);
    }
    if (ordersRef.current && !ordersRef.current.contains(event.target)) {
      setOrdersDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="h-auto w-full justify-between bg-slate-900 px-4 py-4 md:px-8 lg:px-40">
      <nav className="flex items-center justify-between border-b border-gray-700 py-4">
        <Link href="/" className="basis-1/2 md:basis-1/3">
          <Image
            src="https://jashceramic.com/jash-ceramic-logo.svg"
            alt="JashCeramic logo"
            height={200}
            width={200}
            className="h-auto w-12"
          />
        </Link>
        <div
          className="relative w-auto basis-2/4 md:flex md:basis-1/3 md:justify-end"
          ref={profileRef}
        >
          <button onClick={handleProfileToggle}>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end gap-0">
                <p className="text-base font-semibold text-white">
                  {user?.name}
                </p>
                <p className="text-sm font-normal text-gray-300">
                  {user?.role}
                </p>
              </div>
              <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                <Image
                  src="/images/user.svg"
                  alt="Placeholder Image of a user"
                  height={20}
                  width={20}
                  className="flex items-center justify-center"
                />
              </div>
            </div>
          </button>
          {profileDropdown && (
            <div className="absolute right-0 top-12 w-48 rounded-md bg-white shadow-md">
              <ul className="p-2" id="dropdown-menu">
                <li>
                  <Link
                    href="/profile"
                    alt="View Profile Link"
                    className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings"
                    alt="Settings Link"
                    className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                </li>
                <hr className="my-2" />
                <li>
                  <Button
                    variant="link"
                    aria-label="Logout button"
                    onClick={handleUserLogout}
                    className="flex items-start px-4 py-2 text-base font-normal text-gray-700 shadow-none hover:bg-gray-100"
                  >
                    Logout
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex basis-1/4 justify-end md:hidden md:basis-full">
          <Button
            variant="default"
            className="inline-block w-auto bg-white px-2 py-1 text-gray-700"
          >
            <Menu />
          </Button>
        </div>
      </nav>

      <div className="hidden py-8 text-gray-100 md:block">
        <ul className="flex items-center justify-start gap-x-8">
          <li>
            <Link
              href="/"
              alt="Dashboard Page"
              className="text-gray-200 hover:text-gray-50 hover:underline hover:underline-offset-8"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/reports"
              alt="Link to Reports Page"
              className="text-gray-200 hover:text-gray-50 hover:underline hover:underline-offset-8"
            >
              Reports
            </Link>
          </li>
          <li className="relative" ref={productsRef}>
            <Link
              href="#"
              alt=""
              onClick={handleProductsDropdown}
              className="flex items-center"
            >
              Products
              <ChevronDown
                className={
                  productsDropdown ? "-rotate-180 transition duration-300" : ""
                }
              />
            </Link>
            {productsDropdown && (
              <div className="absolute left-0 right-0 top-12 z-50 w-48 rounded-md bg-white shadow-md">
                <ul className="p-2" id="dropdown-menu">
                  <li>
                    <Link
                      href="/tiles"
                      alt="Tiles Products Link"
                      className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleProductsDropdown}
                    >
                      Tiles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sanitary"
                      alt="Sanitary Products Link"
                      className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleProductsDropdown}
                    >
                      Sanitary
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="relative" ref={ordersRef}>
            <Link
              href="#"
              alt=""
              onClick={handleOrdersDropdown}
              className="flex items-center"
            >
              Order
              <ChevronDown
                className={
                  ordersDropdown ? "-rotate-180 transition duration-300" : ""
                }
              />
            </Link>
            {ordersDropdown && (
              <div className="absolute left-0 right-0 top-12 z-50 w-52 transform rounded-md bg-white shadow-md">
                <ul className="p-2" id="dropdown-menu">
                  <li>
                    <Link
                      href="/orders"
                      alt="Link to Orders Page"
                      className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleOrdersDropdown}
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quotation"
                      alt="Link to Quotation Page"
                      className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleOrdersDropdown}
                    >
                      Quotation
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              href="/customers"
              alt="Link to Customer Page"
              className="text-gray-200 hover:text-gray-50 hover:underline hover:underline-offset-8"
            >
              Customers
            </Link>
          </li>
          {user?.role === "super-admin" || user?.role === "admin" ? (
            <li>
              <Link
                href="/teams"
                className="text-gray-200 hover:text-gray-50 hover:underline hover:underline-offset-8"
              >
                Team
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
