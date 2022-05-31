import React from "react";
import Dropdown from "react-multilevel-dropdown";
import { useNavigate } from "react-router-dom";
import "./Multilevel.css";

const MultilevelDropdown = () => {
  const navigate = useNavigate();
  const goto = (field) => {
    navigate(`/${field}`);
  };
  return (
    <Dropdown title="ANZSCO CDR ">
      <Dropdown.Item>
        Unit Group 1332
        <Dropdown.Submenu>
          <Dropdown.Item
            onClick={() => goto("engineering-manager-anzsco-133211")}
          >
            Engineering Manager (ANZSCO 133211)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />
      <Dropdown.Item>
        Unit Group 2331
        <Dropdown.Submenu>
          <Dropdown.Item
            onClick={() => goto("chemical-engineer-anzsco-233111")}
          >
            Chemical Engineer (ANZSCO 233111)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("materials-engineer-anzsco-233112")}
          >
            Materials Engineer (ANZSCO 233112)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />

      <Dropdown.Item>
        Unit Group 2332
        <Dropdown.Submenu>
          <Dropdown.Item onClick={() => goto("civil-engineer-anzsco-233211")}>
            Civil Engineer (ANZSCO 233211)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("geo-technical-engineer-anzsco-233212")}
          >
            Geotechnical Engineer (ANZSCO 233212)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("structural-engineer-anzsco-233214")}
          >
            Structural Engineer (ANZSCO 233214)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("transport-engineer-anzsco-233215")}
          >
            Transport Engineer (ANZSCO 233215)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />

      <Dropdown.Item>
        Unit Group 2333
        <Dropdown.Submenu>
          <Dropdown.Item
            onClick={() => goto("electrical-engineer-anzsco-233311")}
          >
            Electrical Engineer (ANZSCO 233311)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />

      <Dropdown.Item>
        Unit Group 2334
        <Dropdown.Submenu>
          <Dropdown.Item
            onClick={() => goto("electronics-engineer-anzsco-233411")}
          >
            Electronics Engineer (ANZSCO 233411)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />

      <Dropdown.Item>
        Unit Group 2335
        <Dropdown.Submenu>
          <Dropdown.Item
            onClick={() => goto("industrial-engineer-anzsco-233511")}
          >
            Industrial Engineer (ANZSCO 233511)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("mechanical-engineer-anzsco-233512")}
          >
            Mechanical Engineer (ANZSCO 233512)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("production-or-plant-engineer-anzsco-233513")}
          >
            Production or Plant Engineer (ANZSCO 233513)
          </Dropdown.Item>
          <hr />

          {/* <Dropdown.Item>
            Production of Plant Manager (ANZSCO 233513)
          </Dropdown.Item>
          <hr /> */}
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />

      <Dropdown.Item>
        Unit Group 2336
        <Dropdown.Submenu>
          <Dropdown.Item onClick={() => goto("mining-engineer-anzsco-233611")}>
            Mining Engineer (ANZSCO 233611)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("petroleum-engineer-anzsco-233612")}
          >
            Petroleum Engineer (ANZSCO 233612)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />

      <Dropdown.Item>
        Unit Group 2339
        <Dropdown.Submenu>
          <Dropdown.Item
            onClick={() => goto("aeronautical-engineer-anzsco-233911")}
          >
            Aeronautical Engineer (ANZSCO 233911)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("agricultural-engineer-anzsco-233912")}
          >
            Agricultural Engineer (ANZSCO 233912)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("biomedical-engineer-anzsco-233913")}
          >
            Biomedical Engineer (ANZSCO 233913)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("engineering-technologist-anzsco-233914")}
          >
            Engineering Technologist (ANZSCO 233914)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("environmental-engineer-anzsco-233915")}
          >
            Environmental Engineer (ANZSCO 233915)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("engineering-professionals-nec-anzsco-233999")}
          >
            Engineering Professsionals (ANZSCO 233999)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />

      <Dropdown.Item>
        Unit Group 2631
        <Dropdown.Submenu>
          <Dropdown.Item
            onClick={() =>
              goto("computer-networks-and-system-engineers-anzsco-263111")
            }
          >
            Computer Network and Systems Engineer (ANZSCO 263111)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("telecommunication-engineers-anzsco-263311")}
          >
            Telecommunications Engineer (ANZSCO 263311)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() =>
              goto("telecommunication-network-engineers-anzsco-263312")
            }
          >
            Telecommunications Network (ANZSCO 263312)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />

      <Dropdown.Item>
        Unit Group 3122
        <Dropdown.Submenu>
          <Dropdown.Item
            onClick={() => goto("civil-engineering-draftsperson-anzsco-312211")}
          >
            Civil Engineer Draftsperson(ANZSCO 312211)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() => goto("civil-engineering-technician-anzsco-312212")}
          >
            Civil Engineering Technician (ANZSCO 312212)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />

      <Dropdown.Item>
        Unit Group 3132
        <Dropdown.Submenu>
          <Dropdown.Item
            onClick={() =>
              goto("electrical-engineering-draftsperson-anzsco-312311")
            }
          >
            Electrical Engineer Draftsperson(ANZSCO 312311)
          </Dropdown.Item>
          <hr />

          <Dropdown.Item
            onClick={() =>
              goto("electrical-engineering-technician-anzsco-312312")
            }
          >
            Electronic Engineering Technician (ANZSCO 312312)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />

      <Dropdown.Item>
        Unit Group 3123
        <Dropdown.Submenu>
          <Dropdown.Item
            onClick={() =>
              goto("telecommunication-field-engineer-anzsco-313212")
            }
          >
            Telecommunications Field Engineer(ANZSCO 312311)
          </Dropdown.Item>
          <hr />
        </Dropdown.Submenu>
      </Dropdown.Item>
      <hr />
    </Dropdown>
  );
};

export default MultilevelDropdown;
