import Image from "next/image";

const BrandLogos = () => {
  return (
    <section className="py-10 pb-20">
      <div className="container">
        <div className="mx-auto max-w-[1000px] grid grid-cols-1 gap-10 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-5">
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/creator_group.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/creator_group.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/creator_group.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
