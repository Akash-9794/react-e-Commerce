import React from "react";

function Card({ user , handleRemove , id}) {
  return (
    <div className="w-52 h-[35vh] bg-sky-100 rounded-lg flex flex-col items-center p-2">
      <div className="image w-[5vw] h-[5vw] rounded-full bg-blue-500 overflow-hidden">
        <img className="w-full h-full object-cover" src={user.imageUrl} alt="" />
      </div>
      <h1 className="mt-1 text-xl font-semibold text-center">{user.name}</h1>
      <h4 className="opacity-60 text-xs font-semibold">{user.email}</h4>
      <p className="mt-1 text-center text-xs font-semibold leading-1 tracking-tight">{user.discription}</p>
      <button onClick={()=>handleRemove(id)} className="px-3 mt-3 py-1 bg-red-500 text-xs rounded-md font-semibold text-white">remove</button>
    </div>
  );
}

export default Card;