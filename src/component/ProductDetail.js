import React, { useState } from 'react';
import selectedIme from "../assets/singlepic.png"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"
import pro4 from "../assets/pro4.png"
import pro5 from "../assets/pro5.png"
import pro6 from "../assets/pro6.png"
import las1 from "../assets/las1.png"
import las2 from "../assets/las2.png"
import las3 from "../assets/las3.png"
import las4 from "../assets/las4.png"
import After from "../assets/After.png"


const productImages = [
  '/assets/main-product.png', // Main image
  '/assets/thumb1.png',
  '/assets/thumb2.png',
  '/assets/thumb3.png',
  '/assets/thumb4.png',
];

const variants = [
  { label: '', mgo: 'MGO 829+', img: pro1},
{ label: '', mgo: 'MGO 829+', img: pro2},   
{ label: '', mgo: 'MGO 829+', img: pro3},
{ label: '', mgo: 'MGO 829+', img: pro4},
{ label: '', mgo: 'MGO 829+', img: pro5},
{ label: '', mgo: 'MGO 829+', img: pro6},


];

const bundleProducts = [
  { label: 'UMF 20+', img: las1 },
  { label: 'UMF 24+', img: las2 },
  { label: 'UMF 26+', img: las3 },
  { label: 'Manuka Honey', img: las4 },
];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedVariant, setSelectedVariant] = useState(variants[1]);
  const [quantity, setQuantity] = useState(1);
  const [selectedBundle, setSelectedBundle] = useState([bundleProducts[0]]);
  const [showUMFInfo, setShowUMFInfo] = useState(false);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Images & Gallery */}
      <div>
        {/* Small devices: carousel UI */}
        <div className="border-2 border-pink-400 rounded-xl overflow-visible mb-4 relative flex items-center justify-center bg-white lg:hidden" style={{ minHeight: '260px' }}>
          {/* Left Arrow */}
          <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10">
            <svg width="28" height="28" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 6 10 14 18 22"/></svg>
          </button>
          {/* Right Arrow */}
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10">
            <svg width="28" height="28" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="10 6 18 14 10 22"/></svg>
          </button>
          {/* Background shape (SVG or PNG) */}
          <img src={require('../assets/bg.png')} alt="Background" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 object-contain z-0" />
          {/* Product image centered */}
          <img src={pro1} alt="Product" className="relative z-10 w-40 h-40 object-contain" />
          {/* Overlay badge */}
          {/* <div className="absolute top-6 right-16 flex items-center gap-1 bg-white rounded-full shadow px-2 py-1 z-20">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-gray-700 border-2 border-white">P</div>
            <img src={require('../assets/singlepic.png')} alt="Profile" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <span className="ml-1 font-bold text-gray-700">5</span>
          </div> */}
        </div>
        {/* Large devices: show singlepic.png only */}
        <div className="hidden lg:block border rounded-lg overflow-hidden mb-4">
          <img src={selectedIme} alt="Product" className="w-full h-90 object-contain" />
        </div>

      </div>
      {/* Right: Product Info */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Manuka Honey</h2>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-lg font-semibold">UMF  24+</span>
          <br/>
          
        </div>
        <h1>MGO 1122+</h1>
            {/* <span className="ml-1 text-gray-400 cursor-pointer bg-gray-200 p-2" title="Learn more">&#9432;</span> */}
           <div className="relative inline-block">
             <button
               className="bg-gray-200 inline-flex items-center p-2 rounded cursor-pointer text-gray-700"
               onMouseEnter={() => setShowUMFInfo(true)}
               onMouseLeave={() => setShowUMFInfo(false)}
             >
               <span className="mr-2">&#9432;</span>
               What is UMF and MGO?
             </button>
             {showUMFInfo && (
               <div
                 className="absolute left-0 mt-2 z-50 w-[400px] bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                 onMouseEnter={() => setShowUMFInfo(true)}
                 onMouseLeave={() => setShowUMFInfo(false)}
               >
                 <div className="mb-4">
                   <span className="font-bold text-lg">UMF</span>
                   <span className="ml-2 text-gray-700">is the strength and purity rating of Manuka honey.</span>
                   <div className="flex gap-2 mt-2 mb-1">
                     <span className="text-orange-500 font-bold">10+</span>
                     <span className="text-red-500 font-bold">15+</span>
                     <span className="text-pink-500 font-bold">20+</span>
                     <span className="text-purple-600 font-bold">24+</span>
                     <span className="text-blue-500 font-bold">26+</span>
                     <span className="text-green-500 font-bold">28+</span>
                     <span className="text-blue-900 font-bold">30+</span>
                   </div>
                   <div className="text-gray-500 text-xs">The higher the number, the greater the potency and rarity of Manuka honey.</div>
                 </div>
                 <div className="mb-4">
                   <span className="font-bold text-lg">MGO</span>
                   <span className="ml-2 text-gray-700">is the key natural compound that gives Manuka honey its special antibacterial strength.</span>
                   <div className="flex gap-2 mt-2 mb-1">
                     <span className="text-orange-500 font-bold">263+</span>
                     <span className="text-red-500 font-bold">514+</span>
                     <span className="text-pink-500 font-bold">829+</span>
                     <span className="text-purple-600 font-bold">1122+</span>
                     <span className="text-blue-500 font-bold">1282+</span>
                     <span className="text-green-500 font-bold">1450+</span>
                     <span className="text-blue-900 font-bold">1620+</span>
                   </div>
                   <div className="text-gray-500 text-xs">The higher the number, the higher the antibacterial properties in the honey.</div>
                 </div>
                 <button className="block mx-auto mt-2 text-gray-600 underline text-sm" onClick={() => setShowUMFInfo(false)}>Close</button>
               </div>
             )}
           </div>

        <div className="flex justify-end gap-1">
            {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">💛</span>
            ))}


          <span className="ml-2 text-sm text-gray-600">523 Reviews</span>
        </div>
        <h1>The Optimiser</h1>
        <p className="mb-4 text-gray-700">The Optimiser\nFor those times in life when quality comes first. This pure UMF™ 24+ Manuka honey is powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and batch tested for UMF & MGO. Add flavour to your food and joy to your life!</p>
        {/* Trust Badges */}
        <div className="mb-4">
          <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-3">
            <img src={logo1} alt="Badge" className="h-16" />
            <img src={logo2} alt="Badge" className="h-16" />
            <img src={logo3} alt="Badge" className="h-16" />
            <img src={logo4} alt="Badge" className="h-16" />
            <img src={logo5} alt="Badge" className="h-16" />
            <img src={logo6} alt="Badge" className="h-16" />
          </div>
        </div>
        {/* Variant Selection */}

        <h1>Size (Select One)</h1>
        <p>Variant: 125g | 4.4oz</p>

  <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
  {variants.map((variant, idx) => (
    <button
      key={idx}
      className={`rounded-lg px-4 py-2 font-medium ${
        selectedVariant.label === variant.label ? '' : ''
      }`}
      onClick={() => setSelectedVariant(variant)}
    >
      <img src={variant.img} alt={variant.label} className="h-20 mb-1" />
      {variant.label}
    </button>
  ))}
</div>

        <h1>PAYMENT OPTIONS (SELECT ONE)</h1>
        {/* Payment Options */}
        <div className="flex gap-4 mb-4 bg-[#FAF9F6] p-4 rounded-xl">
          <button className="flex-1 flex flex-col items-center justify-center rounded-full px-6 py-4 font-medium bg-yellow-400 text-white shadow border-2 border-yellow-400">
            <span className="text-base">One-time purchase</span>
            <span className="font-bold text-lg mt-1">$55.88 USD</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center rounded-full px-6 py-4 font-medium bg-white text-gray-700 shadow border-2 border-yellow-400">
            <span className="text-base">Subscribe & save <span className="text-green-600">20%</span></span>
            <span className="font-bold text-lg mt-1">$44.70 USD</span>
          </button>
        </div>
        <div className="flex items-center gap-2 mb-4 text-gray-600 text-sm">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M1 12a11 11 0 0 1 22 0"/><path d="M12 17v-5"/><path d="M12 22v-2"/></svg>
          <span>What is a Subscription?</span>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-medium">SELECT QUANTITY</span>
          <button className="border px-2" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span className="px-4">{quantity}</span>
          <button className="border px-2" onClick={() => setQuantity(quantity + 1)}>+</button>
          <button className="ml-4 bg-black text-white px-6 py-2 rounded-lg font-bold">ADD TO CART</button>
        </div>
        {/* Beauty Bundle */}
        <div className="mb-6 p-6 bg-[#FAF9F6] rounded-xl border border-green-500">
          <div className="flex items-center justify-between mb-4">
            <button className="text-2xl font-bold text-gray-700 mr-2">&#60;</button>
            <h3 className="font-semibold text-lg text-center flex-1">Beauty Bundle</h3>
            <button className="text-2xl font-bold text-gray-700 ml-2">&#62;</button>
          </div>
          <div className="flex items-center gap-6 mb-4">
            {/* Product 1 */}
            <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow">
              <img src={las1} alt="UMF 20+" className="h-16 mb-2" />
              <span className="font-semibold">UMF 20+</span>
              <select className="mt-2 border rounded px-2 py-1 text-sm">
                <option>250g</option>
                <option>500g</option>
              </select>
            </div>
            <span className="text-2xl font-bold">+</span>
            {/* Product 2 */}
            <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow">
              <img src={las2} alt="UMF 24+" className="h-16 mb-2" />
              <span className="font-semibold">UMF 24+</span>
              <select className="mt-2 border rounded px-2 py-1 text-sm">
                <option>250g</option>
                <option>500g</option>
              </select>
            </div>
            <span className="text-2xl font-bold">+</span>
            {/* Product 3: Wooden Spoon */}
            <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow">
              <img src={logo6} alt="Wooden Spoon" className="h-16 mb-2" />
              <span className="font-semibold">Wooden Spoon</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <span className="text-2xl font-bold text-gray-700">$430.88 USD</span>
            <span className="text-green-600 font-semibold">Save 10%</span>
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg">ADD BUNDLE TO CART</button>
          </div>
        </div>
        {/* Delivery & Price */}
        {/* Rewards, Delivery, Afterpay, UMF Scale, Taste Profile */}
        <div className="mb-8 p-6 bg-[#FAF9F6] rounded-xl border border-gray-200">
          <div className="flex items-center mb-4">
            <img src={las4} alt="Colourclub" className="h-6 mr-2" />
            <span className="text-gray-700">Colourclub members earn up to</span>
            <span className="mx-2 bg-yellow-100 text-yellow-600 rounded-full px-3 py-1 font-bold">56</span>
            <span className="text-gray-700">reward points when buy this item. <span className='underline cursor-pointer'>Sign up</span> or <span className='underline cursor-pointer'>log in</span></span>
          </div>
          <div className="flex justify-between mb-2">
            <div>
              <span className="font-bold tracking-wide text-xs">DELIVERY</span>
              <div className="text-gray-700 text-sm">FREE DELIVERY ON ORDERS OVER $30</div>
            </div>
            <div>
              <span className="font-bold tracking-wide text-xs">ESTIMATED DELIVERY DATE:</span>
              <div className="text-gray-700 text-sm">Jun 9 - Jun 13 to</div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="mb-4">
            <span className="font-bold tracking-wide text-xs">AFTER PAY</span>
            <div className="flex items-center text-gray-700 text-sm mt-1">
              <span>or 4 interest-free payments of $13.97 with</span>
              <img src={After} alt="Afterpay" className="h-6 mx-2" />
              <span className="font-bold text-black"></span>
              <span className="ml-1 text-gray-400 cursor-pointer" title="Learn more">&#9432;</span>
            </div>
          </div>
          <hr className="my-4" />
          {/* UMF Scale */}
          <div className="mb-4">
            <span className="font-bold tracking-wide text-xs">UMF™ SCALE</span>
            <div className="flex justify-between items-center mt-2">
              {['UMF™ 10+', 'UMF™ 15+', 'UMF™ 20+', 'UMF™ 24+', 'UMF™ 26+', 'UMF™ 28+', 'UMF™ 30+'].map((umf, idx) => (
                <span key={umf} className={`text-xs font-semibold px-2 ${umf === 'UMF™ 24+' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}>{umf}</span>
              ))}
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-orange-400 via-purple-600 to-green-400 mt-2 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-[-6px]">
                <span className="block w-4 h-4 bg-black rounded-full border-2 border-white"></span>
              </div>
            </div>
          </div>
          {/* Taste Profile */}
          <div className="mb-2">
            <span className="font-bold tracking-wide text-xs">TASTE PROFILE</span>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-600">Clean & Intense</span>
              <span className="text-xs text-gray-600">Bold & Intense</span>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-orange-400 to-blue-400 mt-2 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-[-6px]">
                <span className="block w-4 h-4 bg-black rounded-full border-2 border-white"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
