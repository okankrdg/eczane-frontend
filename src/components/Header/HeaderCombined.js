import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";
import { Header } from "./Header";
import { HeaderRow } from "./HeaderRow";

const SHeaderCombinedWrapper = styled.div`
  padding: 1rem 2.25rem;
  background-image: url("header-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media ${BREAKPOINTS.MD.min} {
    padding: 2.25rem 4.5rem;
  }
`;

export const HeaderCombined = ({
  searchAt,
  setSearchAt,
  filter,
  setFilter,
  searchBarVal,
  setSearchbarVal,
  hasVetData,
}) => {
  return (
    <SHeaderCombinedWrapper>
      <Header />
      <HeaderRow
        setSearchAt={setSearchAt}
        searchAt={searchAt}
        filter={filter}
        setFilter={setFilter}
        searchBarVal={searchBarVal}
        setSearchbarVal={setSearchbarVal}
        hasVetData={hasVetData}
      />
    </SHeaderCombinedWrapper>
  );
};
