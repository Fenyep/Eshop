const Skeleton = () => {
    return (
        <div className="w-auto animate-pulse p-2 rounded-md">
            <div className="w-full h-[300px] bg-slate-500 rounded-md">.</div>
            <div className="flex flex-col mt-4">
                <span className="text-sm w-[100%] font-medium text-gray-600">{"loading"} </span>
                <span className="text-md w-[100%] font-medium">{"loading"} </span>
            </div>
        </div>
    );
  };
  
export default Skeleton;
