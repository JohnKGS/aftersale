const Street = () => {
  return (
    <div className="bg-black w-full h-16 border-gray-400 border-t-16 flex items-center justify-around tn:h-24">
      <div className="bg-white h-3 w-16 rounded tn:h-4 tn:w-20" />
      <div className="bg-white h-3 w-16 rounded tn:h-4 tn:w-20" />
      <div className="bg-white h-3 w-16 rounded tn:h-4 tn:w-20" />
      <div className="hidden bg-white h-3 w-16 rounded tn:h-4 tn:w-20 sm:block" />
      <div className="hidden bg-white h-3 w-16 rounded tn:h-4 tn:w-20 sm:block" />
    </div>
  );
};

export default Street;
