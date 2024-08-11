const HomePage = () => {
  return (
    <div className="bg-bgscreen h-screen flex justify-center items-center">
      <div className="bg-bgcolorcard w-2/3 h-4/5 rounded-lg overflow-hidden">
        <div className="max-w-full min-h-8 bg-slate-700 flex items-center">
          <div className="flex justify-between items-center px-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            </div>
          </div>
        </div>
        <div className="max-w-full min-h-10 bg-bgcolorcardnavbar flex items-end">
            {/* when selected */}
          <div className="bg-bgcolorcard min-h-8 w-48 rounded-t-xl flex justify-between items-center">
            <p className="px-2">Home</p>
            <i className="fa fa-times-circle text-slate-300 px-2"></i>
          </div>
            {/* when not selected */}
          <div className="bg-bgcolorcardnavbar min-h-8 w-48 rounded-t-xl flex justify-between items-center">
            <p className="px-2">Home</p>
            <i className="fa fa-times-circle text-slate-300 px-2"></i>
          </div>
          <div className="border-l border-slate-400 h-8 mx-1"></div>
          <div className="bg-bgcolorcardnavbar min-h-8 w-8 rounded-t-xl flex justify-center items-center">
            <i className="fa fa-plus-circle text-slate-300 px-2"></i>
          </div>
        </div>
        <div className="">Content Todo list Here</div>
      </div>
    </div>
  );
};

export default HomePage;
