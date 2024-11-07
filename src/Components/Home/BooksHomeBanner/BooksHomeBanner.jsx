import { Link } from "react-router-dom";
import SectionTitle from "../../SectionTitle/SectionTitle";


const BooksHomeBanner = () => {
    return (
        <div className="max-w-7xl mx-auto  mt-48 md:mt-0  md:px-32">
            <SectionTitle heading={"---Books---"} subHeading={"BOOKS REVIEW"}></SectionTitle>
         <div className="flex gap-5 md:gap-11  px-7">
         <div className="">
                <img src={"https://i.ibb.co.com/QMXfW70/AR-RAHIKUL-MAKHTUM-250x386.webp"} alt="" />
            </div>
            <div className="text-[7px] md:text-xl">
                <p className="font-bold text-orange-500">Ar-Rahikul Makhtum</p>
                <p>Author : Allama Safiur Rahman Mubarakpuri (Rah.) <br/>
                    Publication: Somokalin Publications  <br />
                    Topic: Biography of Muhammad (PBUH).br
                    Pages : 704, Cover : Hard Cover, <br />Edition : 1st Published, 2023
                    ISBN: 9789849682394 <br />
                    Muhammad peace be upon him. The one who is mercy to the world,<br /> who loves everything in the heavens and the earth, who <br />loved us without seeing one and a half thousand years ago,<br /> was moved by our pain, despite not seeing whom we love
                    <br />more than life - this book is the purest biography of the beloved <br />Prophet.
                     <br /> </p>
                     <Link to={"http://localhost:5173/booksDetails/6728295457ef807977047128"}>
                            <button className="btn w-32 mb-3 md:mb-0   md:w-40 rounded-full p-1 mt-4 md:mt-6">
                                READ MORE
                            </button>
                        </Link>
            </div>
         </div>
        </div>
    );
};

export default BooksHomeBanner;