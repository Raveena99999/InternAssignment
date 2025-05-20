import imagee from "../assets/Ellipse 114.png"
import camera from "../assets/Group 1585.svg"
import "../style/profile.css"
 const Profile = () => {
  
  return (
    <div>
       
    <div className="profile-container">
      <div className="profile-div">
        <h1 className=" ">
          Account settings
        </h1>

         <div className="secondDiv">
        {/* <div className="relative">
          <i className=""></i>
          <img src={imagee} alt="" className="w-20" />
        </div> */}

        <div className="relative profile-image-wrapper">
  <img src={imagee} alt="Profile" className="profile-image" />
  <img
    src={camera} 
    alt="Camera Icon"
    className="camera-icon"
  />
</div>

        <div>
          <p className="">
            <strong>Marry Doe</strong>
          </p>
          <p className="">Marry Doe@gmail.com</p>
        </div>
      </div>
      <p className="para">
        Lorem, ipsum dolor sit amet consectetur adipis elit. Alias expedita
        maiores corru molestias e, eos, corporis sunt minima
        reprehenderit quae! 
      </p>
      </div>
     
       {/* <hr className="dashed-border"/> */}
       <div className="dashed-border"></div>

    </div >
    </div>
  );
};
export default Profile;
