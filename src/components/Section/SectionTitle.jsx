

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto my-8  text-center md:w-3/12">
            <p className="text-yellow-500 mb-2">--- {subHeading} ---</p>
            <h3 className="uppercase text-3xl py-4 border-y-4 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;