const Imgcard = ({ image }) => {
  return (
    <>
      <div
        className=" w-[100%] h-[100%] rounded-[4px] shadow-lg object-cover  p-4  
         relative overflow-hidden 
          "
      >
        <img
          src={image.webformatURL}
          alt="img"
          className="w-[100%]  h-[100%]
           hover:brightness-[50%] transition all 2s hover:opacity-50 hover:scale-110"
        />
        <div className="absolute top-8 right-5"></div>
      </div>
    </>
  );
};
export default Imgcard;
