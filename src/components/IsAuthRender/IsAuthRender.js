import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { accountBackendUrl, accountsBaseURL } from "../../utils/urls";
import { UserContext } from "../../contexts/UserContext";

const IsAuthRender = ({ state, open, setOpen, onLoginClick, referrelId }) => {
  const [copied, setCopied] = useState(false);
  const { getExcelId } = React.useContext(UserContext);

  const handleRegistration = async () => {
    const accessToken = window.localStorage.getItem("accessToken");
    try {
      const res = await axios.get(
        `${accountBackendUrl}/api/Ambassador/signup`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.status === 200) {
        getExcelId(window.localStorage.getItem("accessToken"));
      }
    } catch (err) {
      switch (err.response?.status) {
        case 200:
          alert("You are already an ambassador");
          break;
        case 469:
          window.location.href = `${accountsBaseURL}/complete-profile?redirect_to=${window.location}`;
          break;
        case 500:
          alert("Sorry something went wrong. Please try again later");
          break;
        default:
          alert("Sorry something went wrong.");
          break;
      }
      console.log(err);
    } finally {
    }
  };

  if (state === 1) {
    //logged in + not amba
    return (
      <div className="btn__container">
        <button className="reg__btn" onClick={onLoginClick}>
          LEADERBOARD
        </button>
        <button
          className="amb_btn"
          onClick={() => {
            // setOpen(true);
            handleRegistration();
          }}
        >
          BECOME AMBASSADOR
        </button>
      </div>
    );
  } else if (state === 2) {
    //logged in + amba
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <button className="reg__btn" onClick={onLoginClick}>
          LEADERBOARD
        </button>
        <div
          className="referal_btn"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: "1.3rem" }}>
            Referral ID : <b>{referrelId}</b>
          </div>

          <CopyToClipboard text={referrelId} onCopy={() => setCopied(true)}>
            {copied ? (
              <FiCheck className="tmd_icon" />
            ) : (
              <FiCopy className="tmd_icon" />
            )}
          </CopyToClipboard>
        </div>
        <button
          style={{
            fontSize: "1.3rem",
            cursor:"pointer",
            border: "1px solid #F74670",
            color: "#F74670",
            background: "none",
            padding: "10px",
            borderRadius: "10px",
          }}
          onClick={() => {
            window.open("https://chat.whatsapp.com/K7y07dKv7M789vPMDFPVmU");
          }}
        >
          Join WhatsApp Group
        </button>
      </div>
    );
  } else if (state === 3) {
    //not loggedin not amba
    return (
      <button className="reg__btn" onClick={onLoginClick}>
        REGISTER
      </button>
    );
  } else {
    return null;
  }
};

export default IsAuthRender;
