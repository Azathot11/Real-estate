import React from "react";
import { Link } from "react-router-dom";
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";
import california from "../images/california.jpg";
import chicago from "../images/chicago.jpg";
import newyork from "../images/newyork.jpg";
import avatar from '../images/avatar.png'
import luxury from '../images/luxury.jpg'
import {MdOutlineOtherHouses} from 'react-icons/md'

const Home = () => {
  return (
    <main className="mt-10  md:mt-16">
      <div className=" px-10">
        <div className="sm:text-center lg:text-left">
          <h1 className="tracking-tight font-extrabold text-4xl sm:text-5xl md:6xl">
            <span className="block">Premium Properties</span>
            <span className="block text-green-500">Non-Premium Prices</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 md:text-xl md:mt-5 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:m-0">
            At prime properties,we ensure that our clients get the best
            properties at affordable prices.Luxury is our priority and budget is
            our constrain. Pick and choose from 1000+ properties across the
            globe
          </p>
        </div>

        <div className="lg:flex lg:justify-start">
          <div className="sm:flex mt-5 sm:mt-8 sm: sm:justify-center sm:gap-5 ">
            <div className="md:m-2 ">
              <Link
                to=""
                className="flex justify-center rounded-md bg-green-500 text-white px-8 py-3 "
              >
                View Properties
              </Link>
            </div>
            <div className="md:m-2">
              <Link
                to=""
                className="flex justify-center rounded-md bg-green-300 text-green-700 px-8 py-3 "
              >
                Explore locations
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5 p-10">
          <h2 className="text-3xl text-gray-500 font-semibold">
            Recent properties
          </h2>
        </div>
        <div className="mb-5 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-col-3 xl:grid-col-3 gap-x-3">
          <div className="rounded overflow-hidden shadow-2xl ">
            <img src={home1} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Orchid villa</div>
              <p className="text-gray-700">
                located in the suburbs of california,orchid villa offers lusxury
                with modern touch.Equiped with green lighting and rainwater
                haversting system,this property is ecofriendly
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block text-green-500 font-bold text-sm px-3 py-1 mr-2 mb-2">$ 450,000</span>
            </div>
            <div className="px-6 pt-4 pb-2 ">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">7 beds</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2 ">7 Baths</span>
            </div>
            <div className="px-6  mb-4">
              <button className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-3 mb-2">View property</button>
            </div>
          </div>

          <div className=" rounded overflow-hidden shadow-2xl ">
            <img src={home2} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Orchid villa</div>
              <p className="text-gray-700">
                located in the suburbs of california,orchid villa offers lusxury
                with modern touch.Equiped with green lighting and rainwater
                haversting system,this property is ecofriendly
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block text-green-500 font-bold text-sm px-3 py-1 mr-2 mb-2">$ 450,000</span>
            </div>
            <div className="px-6 pt-4 pb-2 ">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">7 beds</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2 ">7 Baths</span>
            </div>
            <div className="px-6  mb-4">
              <button className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-3 mb-2">View property</button>
            </div>
          </div>

          <div className=" rounded overflow-hidden shadow-2xl  ">
            <img className="w-full" src={home3} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Orchid villa</div>
              <p className="text-gray-700">
                located in the suburbs of california,orchid villa offers lusxury
                with modern touch.Equiped with green lighting and rainwater
                haversting system,this property is ecofriendly
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block text-green-500 font-bold text-sm px-3 py-1 mr-2 mb-2">$ 450,000</span>
            </div>
            <div className="px-6 pt-4 pb-2 ">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">7 beds</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2 ">7 Baths</span>
            </div>
            <div className="px-6  mb-4">
              <button className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-3 mb-2">View property</button>
            </div>
          </div>
        </div>
        {/* <div className='py-20 h-screen' style={{background:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${luxury})`}}>
            <div className="container mx-auto px-6 mt-40">
                <h2 className="text-4xl font-bold text-white mb-2">Experience luxury like never before</h2>
                <h3 className="text-2xl mb-8 text-gray-200 ">50+ Exotic location across the globe</h3>
                <button className="text-white shadow-lg uppercase border-2 px-8 py-4 font-bold tracking-wider">Explore Locations</button>
            </div>
        </div> */}
        
      </div>
      <div className='py-20 h-screen' style={{background:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${luxury})`}}>
            <div className="container mx-auto px-6 mt-40">
                <h2 className="text-4xl font-bold text-white mb-2">Experience luxury like never before</h2>
                <h3 className="text-2xl mb-8 text-gray-200 ">50+ Exotic location across the globe</h3>
                <button className="text-white shadow-lg uppercase border-2 px-8 py-4 font-bold tracking-wider">Explore Locations</button>
            </div>
        </div>
        <div className="px-10">
        <div className="flex justify-center mt-5 p-10">
          <h2 className="text-3xl text-gray-500 font-semibold">
           Locations
          </h2>
        </div>
        <div className="mb-5 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-col-3 xl:grid-col-3 gap-x-3">
          <div className="rounded overflow-hidden shadow-2xl ">
            <img src={california} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">California</div>
              <p className="text-gray-700">
                located in the suburbs of california,orchid villa offers lusxury
                with modern touch.Equiped with green lighting and rainwater
                haversting system,this property is ecofriendly
              </p>
            </div>
           
          </div>

          <div className="rounded overflow-hidden shadow-2xl ">
            <img src={chicago} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">chicago</div>
              <p className="text-gray-700">
                located in the suburbs of california,orchid villa offers lusxury
                with modern touch.Equiped with green lighting and rainwater
                haversting system,this property is ecofriendly
              </p>
            </div>
           
          </div>

          <div className="rounded overflow-hidden shadow-2xl ">
            <img src={newyork} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">New york</div>
              <p className="text-gray-700">
                located in the suburbs of california,orchid villa offers lusxury
                with modern touch.Equiped with green lighting and rainwater
                haversting system,this property is ecofriendly
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className='py-20' style={{background:`linear-gradient(315deg,#D1FAE5 0%,#10B981 75%)`}}>
            <div className="container mx-auto px-6 ">
                <h2 className="text-4xl font-bold text-white mb-2">Save upto 50% on broker commisions</h2>
                <h3 className="text-2xl mb-8 text-gray-200 ">Lowest brocage fees</h3>
                <button className="bg-white shadow-lg rounded-2xl uppercase border-2 px-8 py-4 font-bold tracking-wider">Enquire</button>
            </div>
        </div>
        <div className="flex justify-center mt-5 p-10">
          <h2 className="text-3xl text-gray-500 font-semibold">
           What clients says about us ?
          </h2>
        </div>
   
        <div className="p-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-col-3 xl:grid-col-3 gap-x-3 mb-5">
            <div className=" rounded-2xl p-5 shadow-lg  bg-white">
                <p className="text-gray-500">This is one of the best property website i have ever used. Kudos to Prime Properties and the team</p>
                <div className="  bg-green-200 rounded-full flex mt-7 ">
                <img className='h-11' src={avatar} alt="" />
                    <span className="ml-3">
                        <h3 className="text-md text-green-500 font-bold ">Ade Tony</h3>
                        <p className="text-xs">Director of ATO </p>
                    </span>
                </div>
            </div>
            <div className="  rounded-2xl p-5 shadow-lg bg-white">
                <p className="text-gray-500">This is one of the best property website i have ever used. Kudos to Prime Properties and the team</p>
                <div className="  bg-green-200 rounded-full flex mt-7 ">
                <img className='h-11' src={avatar} alt="" />
                    <span className="ml-3">
                        <h3 className="text-md text-green-500 font-bold ">Kinsly Cho</h3>
                        <p className="text-xs">Director Cho Entertainement </p>
                    </span>
                </div>
            </div>
            <div className=" rounded-2xl p-5 shadow-lg bg-white">
                <p className="text-gray-500">This is one of the best property website i have ever used. Kudos to Prime Properties and the team</p>
                <div className="  bg-green-200 rounded-full flex mt-7 ">
                <img className='h-11' src={avatar} alt="" />
                    <span className="ml-3">
                        <h3 className="text-md text-green-500 font-bold ">Pierre Titcheu</h3>
                        <p className="text-xs">Director of Le faux </p>
                    </span>
                </div>
            </div>
        </div>
        <div class="mt-5 flex p-10 justify-center items-center bg-green-300 ">

<form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name">
                First Name
            </label>
            <input
                class="appearance-none block w-full bg-white-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name" type="text" placeholder="Jane"/>
            <p class="text-green-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name">
                Last Name
            </label>
            <input
                class="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name" type="text" placeholder="Doe"/>
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password">
                E-mail
            </label>
            <input
                class="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email" type="email"/>
            <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password">
                Message
            </label>
            <textarea
                class=" no-resize appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"></textarea>
            <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y /
                resize-x
                / resize</p>
        </div>
    </div>
    <div class="md:flex md:items-center">
        <div class="md:w-1/3">
            <button
                class="shadow bg-green-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button">
                Send
            </button>
        </div>
        <div class="md:w-2/3"></div>
    </div>
</form>
</div>
<footer class="pt-40 px-4 divide-y bg-coolGray-100 text-coolGray-800 ">
        <div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div class="lg:w-1/3">
                <a href="#" class="flex justify-center space-x-3 lg:justify-start">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full bg-white text-4xl">
                        <MdOutlineOtherHouses/>

                    </div>
                    <span class="self-center text-2xl font-semibold text-gray-500">Prime properties</span>
                </a>
            </div>
            <div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                <div class="space-y-3">
                    <h3 class="tracking-wide uppercase text-green-500">Product</h3>
                    <ul class="space-y-1">
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Integrations</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-3">
                    <h3 class="tracking-wide uppercase text-green-500">Company</h3>
                    <ul class="space-y-1">
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-3">
                    <h3 class="uppercase text-green-500">Developers</h3>
                    <ul class="space-y-1">
                        <li>
                            <a href="#">Public API</a>
                        </li>
                        <li>
                            <a href="#">Documentation</a>
                        </li>
                        <li>
                            <a href="#">Guides</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-3">
                    <div class="uppercase text-green-500">Social media</div>
                    <div class="flex justify-start space-x-3">
                        <a href="#" title="Facebook" class="flex items-center p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"
                                class="w-5 h-5 fill-current">
                                <path
                                    d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z">
                                </path>
                            </svg>
                        </a>
                        <a href="#" title="Twitter" class="flex items-center p-1">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current">
                                <path
                                    d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z">
                                </path>
                            </svg>
                        </a>
                        <a href="#" title="Instagram" class="flex items-center p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"
                                class="w-5 h-5 fill-current">
                                <path
                                    d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-6 text-sm text-center text-green-500">© 1968 Company Co. All rights reserved.</div>
    </footer>
    </main>
  );
};

export default Home;
