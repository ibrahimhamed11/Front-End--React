import axios from "axios";
import React from "react";
import { Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBaby } from "../../../Redux/Slices/MohterSlice";

export default function BabyCard() {
  const { baby } = useSelector((state) => state.MotherSlice);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  const api = "http://localhost:4000/vaccination/";
  async function updateVac(babyId) {
    try {
      let res = await axios.get(`${api}${userId}/${babyId}`);
      dispatch(getBaby());
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Accordion className="my-5 mx-5">
      {baby &&
        baby.map((single, index) => {
          return (
            <Accordion.Item
              eventKey={index}
              onClick={() => {
                updateVac(single._id);
              }}
            >
              <Accordion.Header>{single.name}</Accordion.Header>
              <Accordion.Body>
                <table className="table text-center">
                  <thead>
                    <tr className="table-primary">
                      <th>حجم الرأس</th>
                      <th>الطول</th>
                      <th>درجة الحرارة</th>
                      <th>الوزن</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td>{single.headSize}</td>
                      <td>{single.height}</td>
                      <td>{single.temperature}</td>
                      <td>{single.weight}</td>
                    </tr>
                    <tr>
                      <th colSpan={4} className="table-success">
                        التطعيمات
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={2}>نوع التطعيم</th>
                      <th>الحاله</th>
                      <th>التحكم</th>
                    </tr>
                    {single.vaccination.map((vaccine) => {
                      return (
                        <tr className={vaccine.checked ? "table-info" : ""}>
                          <td colSpan={2}>{vaccine.name}</td>
                          <td>{!vaccine.status ? "لم يتم" : ""}</td>
                          <td>
                            {!vaccine.status && (
                              <button className="btn btn-success">تم</button>
                            )}
                          </td>

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
    </Accordion>
  );
}
