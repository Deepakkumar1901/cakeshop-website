import image from "../asset/img1.png";
import image1 from "../asset/img2.png";
import image2 from "../asset/img3.png";
import image3 from "../asset/img4.png";
import image4 from "../asset/img5.png";
import image5 from "../asset/img6.png";
import image6 from "../asset/img7.jpg";
import Hanimeli from "./bakeshop";

export default function About() {
  return (
    <>
      <div className="relative mx-auto">
        <img className="w-full h-[607px] object-cover" src={image6} alt="" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-8xl font-bolder ml-[50%]">
            Delicious Cake <br /> To Order
          </h2>
        </div>
      </div>

      <p className="text-3xl mt-10 text-center">
        ----------------------------- A LITTLE BIT OF FLOUR, SUGAR AND
        ----------------------------- <br />
        <span className="block mt-2">LOVE</span>
      </p>

      <div className="flex justify-around mt-10">
        <div className="max-w-sm  overflow-hidden text-center bg-white p-5">
          <img
            className="w-[230x] h-[230px] object-cover mb-4 ml-14"
            src={image}
            alt="Cup Cake"
          />
          <p className="font-bold text-xl mb-2">CUP-CAKE</p>
          <p className="text-gray-700 text-base mb-4">
            We hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers, are the best way to express your love. Even if
            you can't be with them, you can at least send cake online and show
            your love.
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Buy Now
          </button>
        </div>

        <div className="max-w-sm rounded text-center bg-white p-5">
          <img
            className="w-[200x] h-[200px] object-cover mb-7 ml-[5rem] mt-5"
            src={image1}
            alt="Cup Cake"
          />
          <p className="font-bold text-xl mb-2">BIRTHDAY CAKE</p>
          <p className="text-gray-700 text-base mb-4">
            We hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers, are the best way to express your love. Even if
            you can't be with them, you can at least send cake online and show
            your love.
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Buy Now
          </button>
        </div>

        <div className="max-w-sm rounded overflow-hidden text-center bg-white p-5">
          <img
            className="w-[230x] h-[230px] object-cover mb-4 ml-[3rem]"
            src={image2}
            alt="Milk Shake"
          />
          <p className="font-bold text-xl mb-2">MILK SHAKE</p>
          <p className="text-gray-700 text-base mb-4">
            We hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers, are the best way to express your love. Even if
            you can't be with them, you can at least send cake online and show
            your love.
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Buy Now
          </button>
        </div>
      </div>

      <p className="text-3xl mt-10 text-center">
        ----------------------------- Enjoy Your Sweet Delicious While
        -----------------------------
        <br />
        Having Coffee
      </p>
      <div className="flex">
        <div className="w-[40%] ml-2">
          <img className="h-[630px] w-[80%] " src={image3} alt="" />
        </div>
        <div className="w-[60%] mt-20">
          <p className="text-4xl text-red-800 font-base ml-2">ABOUT US</p>
          <p className="mt-5 text-[14px] px-10">
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and sow your
            lovewe hardly get time to spend with our loved ones. Gifts,
            especially cakes a nd flowers are the best way to express your love
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and sow your
            lovewe hardly get time to spend with our loved ones. Gifts,
            especially cakes a nd flowers are the best way to express your love
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and sow your
            lovewe hardly get time to spend with our loved ones. Gifts,
            especially cakes a nd flowers are the best way to express your love
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and sow your
            lovewe hardly get time to spend with our loved ones. Gifts,
            especially cakes a nd flowers are the best way to express your love
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and sow your
            lovewe hardly get time to spend with our loved ones. Gifts,
            especially cakes a nd flowers are the best way to express your love
            we hardly get time to spend with our loved ones. Gifts, especially
            cakes and flowers are the best way to express your love. Even if you
            can't be with them, you can at least send cake online and sow your
            lovewe hardly get time to spend with our loved ones. Gifts,
            especially cakes a nd flowers are the best way to express your love
            <img className="h-[200px] w-[200px] ml-[78%]" src={image4} alt="" />
          </p>
        </div>
      </div>
      <div className="flex mt-28 -mb-12">
        <p className="text-6xl  font-base ml-28 mt-5">
          Thank you for spending your valuable time
        </p>
        <img className="h-[120px] w-[130px]" src={image5} alt="" />
      </div>

      <footer>
        <div>
          {
            Hanimeli()
          }
        </div>
      </footer>
    </>
  );
}
