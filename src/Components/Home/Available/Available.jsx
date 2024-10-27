import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Available = () => {
    return (
        
        <div>
            <div>
                <SectionTitle heading={"---Aweosome---"} subHeading={"AVAILABLE PRODUCT CATEGORY"}/>
            </div>
           <div className='max-w-7xl  mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2 '>
        <Link to={"/mens"}>
        <div className="card  md:w-80  shadow-2xl rounded-lg">
                <figure>
                    <div>
                    <img className=''
                        src="https://i.ibb.co.com/ctrHhkz/image5.jpg"
                        alt="Shoes" />
                    </div>
                </figure>
                <div className="relative -top-10 md:-top-28">
                    <h2 className="font-bold text-[10px] md:text-xl text-white italic text-center ">
                        MENS COLLECTION
                
                    </h2>
                  
                 
                </div>
                <div className="card-actions justify-center ">
                        <button className="p-1 text-black outline w-28 rounded-full">Show</button>
                    </div>
                    <br />
            </div>
        </Link>
         <Link to={"/books"}>
         <div className="card  md:w-80  shadow-2xl rounded-lg">
                <figure>
                    <div>
                    <img className=''
                        src="https://i.ibb.co.com/KmWF5TK/book-library-with-open-textbook-1.jpg"
                        alt="Shoes" />
                    </div>
                </figure>
                <div className="relative -top-10 md:-top-28">
                    <h2 className="font-bold text-[10px] md:text-xl text-white italic text-center ">
                        BOOKS COLLECTION
                
                    </h2>
                  
                 
                </div>
                <div className="card-actions justify-center ">
                        <button className="p-1 text-black outline w-28 rounded-full">Show</button>
                    </div>
                    <br />
            </div>
         </Link>
       <Link to={"/accessories"}>
       <div className="card  md:w-80  shadow-2xl rounded-lg">
                <figure>
                    <div>
                    <img className=''
                        src="https://i.ibb.co.com/m6T5gxf/accessories1.jpg"
                        alt="Shoes" />
                    </div>
                </figure>
                <div className="relative -top-10 md:-top-28">
                    <h2 className="font-bold text-[10px] md:text-xl text-white italic text-center ">
                        ACCESSORIES ITEMS
                
                    </h2>
                  
                 
                </div>
                <div className="card-actions justify-center ">
                        <button className="p-1 text-black outline w-28 rounded-full">Show</button>
                    </div>
                    <br />
            </div>
       </Link>
          <Link to={"/mobiles"}>
          <div className="card  md:w-80  shadow-2xl rounded-lg">
                <figure>
                    <div>
                    <img className=''
                        src="https://i.ibb.co.com/3ppMgYf/mobile1.jpg"
                        alt="Shoes" />
                    </div>
                </figure>
                <div className="relative -top-10 md:-top-28">
                    <h2 className="font-bold text-[10px] md:text-xl text-white italic text-center ">
                        MOBILES COLLECTION
                
                    </h2>
                  
                 
                </div>
                <div className="card-actions justify-center ">
                        <button className="p-1 text-black outline w-28 rounded-full">Show</button>
                    </div>
                    <br />
            </div>
          </Link>
         <Link to={"/perfume"}>
         <div className="card  md:w-80  shadow-2xl rounded-lg">
                <figure>
                    <div>
                    <img className=''
                        src="https://i.ibb.co.com/k9CFjL4/perfume1.jpg"
                        alt="Shoes" />
                    </div>
                </figure>
                <div className="relative -top-10 md:-top-28">
                    <h2 className="font-bold text-[10px] md:text-xl text-white italic text-center ">
                        PERFUME COLLECTION
                
                    </h2>
                  
                 
                </div>
                <div className="card-actions justify-center ">
                        <button className="p-1 text-black outline w-28 rounded-full">Show</button>
                    </div>
                    <br />
            </div>
         </Link>
          <Link to={"/watch"}>
          <div className="card  md:w-80  shadow-2xl rounded-lg">
                <figure>
                    <div>
                    <img className=''
                        src="https://i.ibb.co.com/2ymnZ5v/warch1.jpg"
                        alt="unavilable watch" />
                    </div>
                </figure>
                <div className="relative -top-10 md:-top-28">
                    <h2 className="font-bold text-[10px] md:text-xl text-white italic text-center ">
                        WATCH COLLECTION
                
                    </h2>
                  
                 
                </div>
                <div className="card-actions justify-center ">
                        <button className="p-1 text-black outline w-28 rounded-full">Show</button>
                    </div>
                    <br />
            </div>
          </Link>
           </div>
        </div>
    );
};

export default Available;