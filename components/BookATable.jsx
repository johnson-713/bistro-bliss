import React from "react";
import { useLocation } from "react-router-dom";

export const BookATable = () => {
  const location = useLocation();
  return (
    <div>
      <div className="text-center flex flex-col gap-[60px] justify-center items-center px-[120px]">
        <div className="flex flex-col gap-[30px] justify-center items-center">
          <p className="text-[100px]">
            {location.pathname == "/contact" ? "Contact Us" : "Book a Table"}
          </p>
          <p className="text-[18px]">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="flex z-10 rounded-xl flex-col gap-[30px] justify-center items-center max-w-[800px] max-h-[500px] px-[40px] py-[34px] bg-[#fff] shadow-lg">
          {location.pathname == "/book-table" && (
            <div className="flex gap-[20px]">
              <div className="flex flex-col justify-start items-start">
                <label>Date</label>
                <input
                  className="w-[350px] p-[10px] border rounded-3xl"
                  type="date"
                  placeholder="13/07/2024"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label>Time</label>
                <input
                  className="w-[350px] p-[10px] border rounded-3xl"
                  type="time"
                  placeholder="15:42 PM"
                />
              </div>
            </div>
          )}
          <div className="flex gap-[20px]">
            <div className="flex flex-col justify-start items-start">
              <label>Name</label>
              <input
                className="w-[350px] p-[10px] border rounded-3xl"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            {location.pathname == "/book-table" ? (
              <div className="flex flex-col justify-start items-start">
                <label>Number</label>
                <input
                  className="w-[350px] p-[10px] border rounded-3xl"
                  type="text"
                  placeholder="x-xxxx-xxxx"
                />
              </div>
            ) : (
              <div className="flex flex-col justify-start items-start">
                <label>Email</label>
                <input
                  className="w-[350px] p-[10px] border rounded-3xl"
                  type="text"
                  placeholder="Enter Email Address"
                />
              </div>
            )}
          </div>

          {location.pathname == "/book-table" ? (
            <div className="flex flex-col justify-start items-start">
              <label>No of Persons</label>
              <input
                className="w-[720px] p-[10px] border rounded-3xl"
                placeholder="1 person"
                list="data"
              />
              <datalist id="data">
                <option>1 person</option>
              </datalist>{" "}
            </div>
          ) : (
            <>
            <div className="flex flex-col justify-start items-start">
              <label>Subject</label>
              <input
                className="w-[720px] p-[10px] border rounded-3xl"
                type="text"
                placeholder="Write a subject"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
            <label>Message</label>
            <textarea
              className="w-[720px] p-[10px] border rounded-3xl"
              type="textarea"
              placeholder="Write a message"
              rows={5}
            />
          </div>
            </>
          )}

          <button
            className={`bg-[#AD343E] w-[720px] py-[10px] text-[#fff] px-[14px] rounded-3xl `}
          >
            {location.pathname == "/contact" ? "Send" : "Book a Table"}
          </button>
        </div>
      </div>
      {location.pathname == "/book-table" && (
        <img src="/images/map.png" alt="" className="mt-[-200px]" />
      )}
    </div>
  );
};
