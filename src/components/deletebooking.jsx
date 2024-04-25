import React from "react";
import { MdDelete } from "react-icons/md";

export default function DeleteAppointment({ appointmentId }) {

  const onDeleteHandler = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BOOKMEDICS_API}/appointment/${appointmentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      });
      
      window.location.href = "/patient/appointment";

      //   navigate("/appointment");
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