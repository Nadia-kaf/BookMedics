import React from "react";
import { MdDelete } from "react-icons/md";

export default function DeleteReview({ reviewId }) {

  const onDeleteHandler = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BOOKMEDICS_API}/review/${reviewId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      });
      
      window.location.href = "/profile";

      //   navigate("/review");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MdDelete
      onClick={onDeleteHandler}
      className="text-red-600 text-2xl cursor-pointer"
    />
  );
}