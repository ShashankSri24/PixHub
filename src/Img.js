 const Imgcard = ({image})=>{
 return(
    <>
        <div className=" w-[100%] h-[100%] rounded-[4px] shadow-lg object-cover  p-4  
         relative overflow-hidden 
          ">
  
            <img src={image.webformatURL} alt="img" className="w-full h-auto 
           hover:brightness-[50%] transition all 2s hover:opacity-50 hover:scale-110" />
            <div className="text-xl text-white font-bold m-[5px] p-[8px]
            leading-[40px]">
            <ul>
                
                
                <li><strong>♥ likes :</strong>{image.likes}</li>
                <li><strong>views :</strong>{image.views}</li>
                <li><strong>#comments:</strong>{image.comments}</li>
            </ul>
            </div>
         </div>
        
    </>
 )
}
export default Imgcard;