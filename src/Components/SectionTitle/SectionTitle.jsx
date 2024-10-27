

 const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="mt-6 mb-5">
             <p className="text-center italic text-orange-400 font-bold">{heading }</p>
             <div className="divider w-80 mx-auto"></div>
             <p className="text-xl font-extrabold text-center ">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;