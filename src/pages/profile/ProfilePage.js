import React from "react";
import "./index.css";
import { Link, useParams } from "react-router-dom";
const profileData = [
  {
    nama: "Rajendra Aurelius Ritmanto",
    nim: "21120121140155",
    fotoUrl:"https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
      
  },
  {
    nama: "Athaillah Daffa Dhiyaul-Haq ",
    nim: "21120121140099",
    fotoUrl:"https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"  
  },
  {
    nama: "Lina Silfiyah",
    nim: "21120121120027",
    fotoUrl:"https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"  
  },
  {
    nama: "Tanu Prahatama Hafiyyan",
    nim: "21120121120083",
    fotoUrl:"https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"  
  },
];

function ProfilePage() {
  return (
    <div>
      <h1>Team Members</h1>
      <div className="profile-cards">
        {profileData.map((data, index) => (
          <div className="profile-card" key={index}>
            <img src={data.fotoUrl} alt={data.nama} />
            <h3>{data.nama}</h3>
            <p>NIM: {data.nim}</p>
          </div>
        ))}
      </div>
      <div className="profile-cards">
        <button className="home-btn">
        <Link to="/">Back to Home</Link>
        </button>
        </div>
    </div>
  );
}

export default ProfilePage;
