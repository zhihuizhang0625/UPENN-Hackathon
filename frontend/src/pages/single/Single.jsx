import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/submission_table/Submission_Table";



const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Quick Links</h1>
            <div className="item">
              <img
                src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Go Practice:</h1>
                <div className="detailItem">
                  
                  <span className="itemKey">Leetcode:</span>
                  <span className="itemValue">https://leetcode.com/</span>
            
                </div>
                <div className="detailItem">
                  <span className="itemKey">This Problem link:</span>
                  <span className="itemValue">https://leetcode.com/</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="LeetCode Activity" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Submission History</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
