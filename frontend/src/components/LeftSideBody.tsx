const LeftSideBody = () => {
  return (
    <div className="text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8 lg:leading-9 flex-1 text-slate-700">
      {/*Hook */}
      <div className="border-b-2 border-sky-200">
        <div className="pb-6 sm:pb-8 lg:pb-10">
          <div>
            <span className="float-left text-5xl sm:text-6xl lg:text-8xl leading-none mr-2 bg-gradient-to-br from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">W</span>
            elcome to CloudCare Pharmacy — your trusted partner in health and wellness.
            We understand that navigating the world of medicines can be overwhelming.
            That's why we've built a pharmacy that puts you first: transparent pricing,
            expert advice from licensed pharmacists, and fast delivery right to your door.
          </div>
          <div className="mt-4">
            Whether you need prescription refills, over-the-counter remedies for that
            stubborn cold, vitamins to boost your immune system, or specialized care
            products, we've got you covered. Every product in our catalog is sourced
            from FDA-approved manufacturers and stored under strict pharmaceutical
            standards. Our team of experienced pharmacists reviews each order to ensure
            the right dosage, the right instructions, and zero risks of interaction.
          </div>
        </div>
      </div>
      {/*After text can be any */}
      <div className="pt-6 sm:pt-8 lg:pt-10">
        <p className="font-semibold text-sky-700 mb-3">Why Choose CloudCare?</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-sky-400 shrink-0"></span>
            <span><strong className="text-sky-700">Licensed Pharmacists</strong> — Every prescription is double-checked by a certified pharmacist before dispatch.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 shrink-0"></span>
            <span><strong className="text-purple-700">Free Delivery</strong> — Free next-day delivery on all orders over $25. Same-day delivery available in select areas.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-pink-400 shrink-0"></span>
            <span><strong className="text-pink-700">Best Prices</strong> — Price match guarantee. We'll match any licensed pharmacy's price on identical products.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-sky-400 shrink-0"></span>
            <span><strong className="text-sky-700">24/7 Support</strong> — Chat with a pharmacist anytime. We're here when you need us.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBody;
