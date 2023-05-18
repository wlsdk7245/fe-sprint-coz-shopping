import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../app.component/filter/Filter";
import BookmarkList from "../app.feature/Bookmark/BookmarkList";

const BookmarkPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <StyledWrapper>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <BookmarkList selectedFilter={selectedFilter} />
    </StyledWrapper>
  );
};

export default BookmarkPage;

const StyledWrapper = styled.div``;
