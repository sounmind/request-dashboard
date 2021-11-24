import { useEffect, useState } from "react";
import { intersection } from "lodash";

import { IProductionRequest } from "../types";
import useMultiSelect from "./useMultiSelect";
import { MATERIALS, METHODS, STATUS } from "../constants";

const useRequestFilter = (requests: IProductionRequest[] | []) => {
  const [filteredRequests, setFilteredRequests] = useState(requests);
  const {
    selected: selectedMethods,
    handleChange: handleChangeMethod,
    handleReset: handleResetMethod,
  } = useMultiSelect({ name: "가공방식", options: METHODS });
  const {
    selected: selectedMaterials,
    handleChange: handleChangeMaterial,
    handleReset: handleResetMaterial,
  } = useMultiSelect({ name: "재료", options: MATERIALS });
  const [isConsultingChecked, setIsConsultingChecked] = useState(false);

  useEffect(() => {
    const newRequests = requests
      .filter((request) => {
        return intersection(request.method, selectedMethods).length;
      })
      .filter(
        (request) => intersection(request.material, selectedMaterials).length
      )
      .filter(({ status }) =>
        isConsultingChecked ? status === STATUS.ongoing : true
      );

    setFilteredRequests(newRequests);
  }, [isConsultingChecked, requests, selectedMaterials, selectedMethods]);

  const handleToggleViewConsulting = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsConsultingChecked(event.target.checked);
  };

  const handleClickResetFilter = () => {
    handleResetMethod();
    handleResetMaterial();
  };

  return {
    filteredRequests,

    selectedMaterials,
    selectedMethods,
    isConsultingChecked,

    handleChangeMethod,
    handleChangeMaterial,
    handleToggleViewConsulting,
    handleClickResetFilter,
  };
};

export default useRequestFilter;
