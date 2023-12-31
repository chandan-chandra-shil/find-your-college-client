

import { Link } from 'react-router-dom';

const CollegesCard = ({ college }) => {
  const { collegeImage, admissionDates, collegeName } = college || "";
  console.log("collegescard",college)
  
  return (
    <div className="card    bg-green-50  ">
      <figure>
        <img src={collegeImage} alt="Shoes" />
      </figure>
      <div className="card-body p-2">
        <h2 className="md:text-2xl  font-semibold mb-2 text-xl">
          Name :{collegeName}
        </h2>
        <h2 className="font-semibold  text-xl">Admission Date :</h2>
        <h2 className="text-xl">
          Events:{college.events[0].name} , {college.events[1].name}
        </h2>
        <h2 className="text-xl">
          Sports:{college.sports[0].category} , {college.sports[0].category}
        </h2>

        <div className="text-end mb-2 mr-2  ">
          <Link to={`/college-details/${college._id}`}>
            <button className="mt-5 hover:border-b-4 hover:border-green-500 rounded-md font-semibold hover:text-white bg-red-500 text-white hover:bg-red-600   px-8 py-1">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegesCard;