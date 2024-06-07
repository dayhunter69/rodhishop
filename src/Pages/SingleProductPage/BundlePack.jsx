import React from 'react';
import ProductCard from './ProductCard';

const BundlePack = () => {
  const Bundleproducts = [
    {
      image: 'https://rodhishop.b-cdn.net/Puluz40/DSC09542.webp',
      price: 4999,
      title: 'ALL OK PULUZ 40CM FOLDABLE',
      description: 'STUDIO BOX WITH RING LIGHT',
    },
    {
      image: 'https://rodhishop.b-cdn.net/Puluz40/DSC09541.webp',
      price: 3999,
      title: 'PULUZ 30CM Mini',
      description: 'FOLDABLE AND PORTABLE STUDIO BOX',
    },
  ];

  return (
    <div className="p-8 mb-10">
      <h1 className="font-Arial not-italic text-2xl text-primary mb-4 mt-3">
        Bundle Packs: Quality at a Great Price
      </h1>
      <div className="w-full flex items-center space-x-4">
        <div className="flex items-center justify-center">
          <ProductCard
            image={Bundleproducts[0].image}
            price={Bundleproducts[0].price}
            title={Bundleproducts[0].title}
            description={Bundleproducts[0].description}
          />
        </div>
        <span className="text-2xl px-10">+</span>
        <div className="flex items-center justify-center">
          <ProductCard
            image={Bundleproducts[1].image}
            price={Bundleproducts[1].price}
            title={Bundleproducts[1].title}
            description={Bundleproducts[1].description}
          />
        </div>
        <span className="text-2xl px-10">=</span>
        <div className="text-center">
          <div
            className="bg-[#013593] rounded-full  text-white ml-20 p-1"
            style={{ transform: 'rotate(30deg)' }}
          >
            20% Save
          </div>
          <div className="line-through">8998</div>
          <div className="font-bold">7999</div>

          <button className="mt-4 px-4 py-2 bg-[#DD0B39] text-white rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BundlePack;
