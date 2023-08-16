import ChuckNorrisCategories from "./ChuchnorrisCategory";
import ChuchnorrisRandom from "./ChuchnorrisRandom";

const ChuchnorrisApi = () => {
  // Consumir api de frase random de chuchnorris

  return (
    <section className="flex flex-col justify-center text-center max-w-[500px] mx-auto bg-black ">
      <div className="bg-yellow-600 m-3 border-2 rounded-lg mt-10">
        <h2 className="text-center font-bold p-4 text-[1rem] text-black ">
          Create by @lildree
        </h2>
        <ChuckNorrisCategories />
        <ChuchnorrisRandom />
      </div>
    </section>
  );
};

export default ChuchnorrisApi;
