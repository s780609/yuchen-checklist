"use client";

import { useState } from "react";
import CheckBox from "./components/CheckBox";

export default function Home() {
  const [caseType, setCaseType] = useState();
  const [classType, setClassType] = useState();
  const [resultList, setResultList] = useState([]);
  console.log("resultList", resultList);
  const classIList = ["IFV", "label", "manufacturer name & address"];

  const handleRequired = (e) => {
    console.log(caseType);
    console.log(classType);
    if (caseType === "新案" && classType === "ClassI") {
      if (e.target.checked) {
        setResultList([...resultList, e.target.id]);
      } else {
        setResultList(resultList.filter((item) => item !== e.target.id));
      }
    }
  };

  const handleCaseType = (e) => {
    if (e.target.id === "新案") {
      if (e.target.checked) {
        setCaseType("新案");
      } else {
        setCaseType("");
      }
    }

    if (e.target.id === "變更案") {
      if (e.target.checked) {
        setCaseType("變更案");
      } else {
        setCaseType("");
      }
    }

    if (e.target.id === "展延案") {
      if (e.target.checked) {
        setCaseType("展延案");
      } else {
        setCaseType("");
      }
    }
  };

  const handleClass = (e) => {
    if (e.target.id === "ClassI") {
      if (e.target.checked) {
        setClassType("ClassI");
      } else {
        setClassType("");
      }
    }

    if (e.target.id === "ClassII") {
      if (e.target.checked) {
        setClassType("ClassII");
      } else {
        setClassType("");
      }
    }

    if (e.target.id === "ClassIII") {
      if (e.target.checked) {
        setClassType("ClassIII");
      } else {
        setClassType("");
      }
    }
  };

  return (
    <main className="grid grid-cols-1">
      <div className="text-3xl bg-white rounded text-black mx-2 my-2 px-2 py-2">
        <div>案件種類</div>
        <div className="text-2xl">
          {/* 只能三選一 */}
          <CheckBox
            id="新案"
            text={"新案"}
            checked={caseType === "新案"}
            onChange={handleCaseType}
          ></CheckBox>
          <CheckBox
            id="變更案"
            text={"變更案"}
            checked={caseType === "變更案"}
            onChange={handleCaseType}
          ></CheckBox>
          <CheckBox
            id="展延案"
            text={"展延案"}
            checked={caseType === "展延案"}
            onChange={handleCaseType}
          ></CheckBox>
        </div>
      </div>

      {caseType === "新案" && (
        <div className="text-3xl bg-white rounded text-black mx-2 my-2 px-2 py-2">
          <div>Class I or II or III</div>
          <div className="text-2xl">
            <CheckBox
              id="ClassI"
              text={"ClassI"}
              checked={classType === "ClassI"}
              onChange={handleClass}
            ></CheckBox>
            <CheckBox
              id="ClassII"
              text={"ClassII"}
              checked={classType === "ClassII"}
              onChange={handleClass}
            ></CheckBox>
            <CheckBox
              id="ClassIII"
              text={"ClassIII"}
              checked={classType === "ClassIII"}
              onChange={handleClass}
            ></CheckBox>
          </div>
        </div>
      )}

      <div className="text-3xl bg-white rounded text-black mx-2 my-2 px-2 py-2">
        <div>Required</div>
        <div className="text-2xl">
          {caseType === "新案" && classType === "ClassI" && (
            <>
              {classIList.map((item) => {
                return (
                  <CheckBox
                    key={item}
                    id={item}
                    text={item}
                    onChange={handleRequired}
                  ></CheckBox>
                );
              })}
            </>
          )}
        </div>
      </div>

      {false && (
        <div className="text-3xl bg-white rounded text-black mx-2 my-2 px-2 py-2">
          <div>Optional</div>
          <div className="text-2xl">
            <CheckBox id="EEE" text={"EEE"}></CheckBox>
            <CheckBox id="FFF" text={"FFF"}></CheckBox>
          </div>
        </div>
      )}

      <div className="text-3xl bg-white rounded text-black mx-2 my-2 px-2 py-2">
        <div>Check list</div>
        <div className="text-2xl">
          <table>
            <thead>
              <tr>
                <th className="border border-black">項目編號</th>
                <th className="border border-black">項目名稱</th>
              </tr>
            </thead>
            <tbody>
              {resultList.map((item, index) => {
                return (
                  <tr key={item + index}>
                    <td className="border border-black">{index}</td>
                    <td className="border border-black">{item}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
