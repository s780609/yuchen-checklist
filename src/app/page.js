"use client";

import { useEffect, useState } from "react";
import CheckBox from "./components/CheckBox";

export default function Home() {
  const [caseType, setCaseType] = useState();
  const [classType, setClassType] = useState();
  const [requiredList, setRequiredList] = useState([]);
  const [optionalList, setOptionalList] = useState([]);
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    handleRequiredList();
  }, [classType]);

  const handleRequired = (e) => {
    if (e.target.checked) {
      setResultList([...resultList, e.target.id]);
    } else {
      setResultList(resultList.filter((item) => item !== e.target.id));
    }
  };

  const handleCaseType = (e) => {
    if (e.target.id === "新註冊案(查登)") {
      if (e.target.checked) {
        setCaseType("新註冊案(查登)");

        return;
      }
    }

    if (e.target.id === "新註冊案(QSD)") {
      if (e.target.checked) {
        setCaseType("新註冊案(QSD)");

        return;
      }
    }

    if (e.target.id === "變更案(增規)") {
      if (e.target.checked) {
        setCaseType("變更案(增規)");

        return;
      }
    }

    if (e.target.id === "變更案(中文說明書)") {
      if (e.target.checked) {
        setCaseType("變更案(中文說明書)");

        return;
      }
    }

    if (e.target.id === "變更案(廠名廠址)") {
      if (e.target.checked) {
        setCaseType("變更案(廠名廠址)");

        return;
      }
    }

    if (e.target.id === "變更案(QSD新增品項)") {
      if (e.target.checked) {
        setCaseType("變更案(QSD新增品項)");

        return;
      }
    }

    if (e.target.id === "展延案") {
      if (e.target.checked) {
        setCaseType("展延案");

        return;
      }
    }

    if (e.target.id === "授權案") {
      if (e.target.checked) {
        setCaseType("授權案");

        return;
      }
    }

    if (e.target.id === "屬性查詢案") {
      if (e.target.checked) {
        setCaseType("屬性查詢案");

        return;
      }
    }

    setCaseType("");
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

  const handleRequiredList = () => {
    const classIRequiredList = [
      "IFU (Instructions for Use)",
      "Brochure (Catalog)",
      "Label",
      "Physical Manufacturer Name & Address",
    ];

    const classIOptionalList = ["Manufacturer contract letter"];

    const classIIRequiredList = [
      "IFU (Instructions for Use)",
      "Server Manual",
      "Brochure (Catalog)",
      "Label",
      "Color Photo",
      "FSC or CFG (Forest Stewardship Council or Controlled Wood)",
      "LoA (Letter of Authorization)",
      "Product Explosive Drawing + Bill of Material (BOM) + Block Diagram (or Electric Circuit Diagram)",
      "Product Engineering Drawing",
      "IEC & EMC (International Electrotechnical Commission & Electromagnetic Compatibility)",
      "Biocompatibility Report",
      "Sterilization Validation Report & One Batch Sterilization Record/Certificate",
      "Performance Test Report",
    ];

    const classIIOptionalList = ["Manufacturer contract letter"];

    if (caseType === "新註冊案(查登)") {
      if (classType === "ClassI") {
        setRequiredList(classIRequiredList);
        setOptionalList(classIOptionalList);
        setResultList(classIRequiredList);

        return;
      }

      if (classType === "ClassII") {
        setRequiredList(classIIRequiredList);
        setOptionalList(classIIOptionalList);
        setResultList(classIIRequiredList);

        return;
      }
    }

    setRequiredList([]);
    setResultList([]);
  };

  return (
    <main className="grid grid-cols-1">
      <div className="text-3xl bg-white rounded text-black mx-2 my-2 px-2 py-2">
        <div>案件種類</div>
        <div className="text-2xl">
          {/* 只能三選一 */}
          <CheckBox
            id="新註冊案(查登)"
            text={"新註冊案(查登)"}
            checked={caseType === "新註冊案(查登)"}
            onChange={handleCaseType}
          ></CheckBox>
          <CheckBox
            id="新註冊案(QSD)"
            text={"新註冊案(QSD)"}
            checked={caseType === "新註冊案(QSD)"}
            onChange={handleCaseType}
          ></CheckBox>
          <CheckBox
            id="變更案(增規)"
            text={"變更案(增規)"}
            checked={caseType === "變更案(增規)"}
            onChange={handleCaseType}
          ></CheckBox>
          <CheckBox
            id="變更案(中文說明書)"
            text={"變更案(中文說明書)"}
            checked={caseType === "變更案(中文說明書)"}
            onChange={handleCaseType}
          ></CheckBox>
          <CheckBox
            id="變更案(廠名廠址)"
            text={"變更案(廠名廠址)"}
            checked={caseType === "變更案(廠名廠址)"}
            onChange={handleCaseType}
          ></CheckBox>
          <CheckBox
            id="變更案(QSD新增品項)"
            text={"變更案(QSD新增品項)"}
            checked={caseType === "變更案(QSD新增品項)"}
            onChange={handleCaseType}
          ></CheckBox>
          <CheckBox
            id="展延案"
            text={"展延案"}
            checked={caseType === "展延案"}
            onChange={handleCaseType}
          ></CheckBox>
          <CheckBox
            id="授權案"
            text={"授權案"}
            checked={caseType === "授權案"}
            onChange={handleCaseType}
          ></CheckBox>
          <CheckBox
            id="屬性查詢案"
            text={"屬性查詢案"}
            checked={caseType === "屬性查詢案"}
            onChange={handleCaseType}
          ></CheckBox>
        </div>
      </div>

      {caseType === "新註冊案(查登)" && (
        <div className="text-3xl bg-white rounded text-black mx-2 my-2 px-2 py-2">
          <div>Class I or II or III</div>
          <div className="text-2xl">
            <CheckBox
              id="ClassI"
              text={"ClassI"}
              checked={classType === "ClassI"}
              onChange={(e) => {
                handleClass(e);
              }}
            ></CheckBox>
            <CheckBox
              id="ClassII"
              text={"ClassII"}
              checked={classType === "ClassII"}
              onChange={(e) => {
                handleClass(e);
              }}
            ></CheckBox>
            <CheckBox
              id="ClassIII"
              text={"ClassIII"}
              checked={classType === "ClassIII"}
              onChange={(e) => {
                handleClass(e);
              }}
            ></CheckBox>
          </div>
        </div>
      )}

      <div className="text-3xl bg-white rounded text-black mx-2 my-2 px-2 py-2">
        <div>Required</div>
        <div className="text-2xl">
          {requiredList.map((item) => {
            return (
              <div key={item}>
                <CheckBox
                  id={item}
                  text={item}
                  checked={resultList.includes(item)}
                  onChange={handleRequired}
                ></CheckBox>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-3xl bg-white rounded text-black mx-2 my-2 px-2 py-2">
        <div>Optional</div>
        <div className="text-2xl">
          {optionalList.map((item) => {
            return (
              <div key={item}>
                <CheckBox
                  id={item}
                  text={item}
                  checked={resultList.includes(item)}
                  onChange={handleRequired}
                ></CheckBox>
              </div>
            );
          })}
        </div>
      </div>

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
                    <td className="border border-black">{index + 1}</td>
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
