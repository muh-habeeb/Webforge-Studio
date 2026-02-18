import MainLayout from "./layout/MainLayout";

const Builder = () => {
  return (
    <> 
      <div className="hidden md:block h-screen relative">
            <MainLayout />
      </div>

      <div className="flex md:hidden h-screen items-center justify-center">
        <h2 className="text-lg font-semibold text-center font-montserrat">
          Builder is not available on small screens. Please use a larger device.
        </h2>
      </div>
    </>
  );
  // }
};

export default Builder;
